import { ICreateComplimentDTO } from '@modules/compliments/dtos/ICreateComplimentDTO';
import { IComplimentsRepository } from '@modules/compliments/repositories/IComplimentsRepository';
import { getRepository, Repository } from 'typeorm';

import { Compliment } from '../entities/Compliment';

class ComplimentsRepository implements IComplimentsRepository {
  private repository: Repository<Compliment>;

  constructor() {
    this.repository = getRepository(Compliment);
  }

  async listReceiver(userReceiver: string): Promise<Compliment[]> {
    const compliments = await this.repository.find({
      where: {
        userReceiver,
      },

      relations: ['senderUser', 'receiverUser', 'tag'],
    });

    return compliments;
  }

  async listSender(userSender: string): Promise<Compliment[]> {
    const compliments = await this.repository.find({
      where: {
        userSender,
      },
      relations: ['senderUser', 'receiverUser', 'tag'],
    });

    return compliments;
  }

  async create({
    message,
    tagId,
    userReceiver,
    userSender,
  }: ICreateComplimentDTO): Promise<Compliment> {
    const compliment = this.repository.create({
      message,
      tagId,
      userReceiver,
      userSender,
    });

    return this.repository.save(compliment);
  }
}

export { ComplimentsRepository };
