import { Compliment } from '@modules/compliments/infra/typeorm/entities/Compliment';
import { IComplimentsRepository } from '@modules/compliments/repositories/IComplimentsRepository';
import { ITagsRepository } from '@modules/tags/repositories/ITagsRepository';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import path from 'path';
import { inject, injectable } from 'tsyringe';

import { IMailProvider } from '@shared/infra/container/providers/MailProvider/IMailProvider';

import { CreateComplimentError } from './CreateComplimentError';

interface IRequest {
  tagId: string;
  userSender: string;
  userReceiver: string;
  message: string;
}

@injectable()
class CreateComplimentUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('TagsRepository')
    private tagsRepository: ITagsRepository,
    @inject('ComplimentsRepository')
    private compliments: IComplimentsRepository,
    @inject('MailProvider')
    private mailProvider: IMailProvider,
  ) {}

  async execute({
    message,
    tagId,
    userSender,
    userReceiver,
  }: IRequest): Promise<Compliment> {
    if (userSender === userReceiver) {
      throw new CreateComplimentError.UserReceiverAndSenderAreSame();
    }

    const userReceiverExists = await this.usersRepository.findById(
      userReceiver,
    );
    if (!userReceiverExists) {
      throw new CreateComplimentError.UserReceiver();
    }

    const tagExists = await this.tagsRepository.findTagById(tagId);
    if (!tagExists) {
      throw new CreateComplimentError.TagNotExists();
    }

    const userSenderInfo = await this.usersRepository.findById(userSender);

    const compliment = await this.compliments.create({
      userSender,
      userReceiver,
      message,
      tagId,
    });

    const variables = {
      userReceiver: userReceiverExists.name,
      tag: tagExists.name,
      message,
      userSender: userSenderInfo.name,
      appName: process.env.APP_NAME,
    };
    const pathTemplate = path.resolve(
      __dirname,
      '..',
      '..',
      'views',
      'emails',
      'sendCompliment.hbs',
    );
    await this.mailProvider.sendMail({
      to: userReceiverExists.email,
      path: pathTemplate,
      subject: `Você recebeu um elogío de ${userSenderInfo.name}`,
      variables,
    });

    return compliment;
  }
}

export { CreateComplimentUseCase };
