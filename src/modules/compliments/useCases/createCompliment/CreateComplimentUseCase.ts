import { Compliment } from '@modules/compliments/infra/typeorm/entities/Compliment';
import { IComplimentsRepository } from '@modules/compliments/repositories/IComplimentsRepository';
import { ITagsRepository } from '@modules/tags/repositories/ITagsRepository';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';

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
    const compliment = await this.compliments.create({
      userSender,
      userReceiver,
      message,
      tagId,
    });

    return compliment;
  }
}

export { CreateComplimentUseCase };
