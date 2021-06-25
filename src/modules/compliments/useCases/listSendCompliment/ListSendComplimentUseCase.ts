import { Compliment } from '@modules/compliments/infra/typeorm/entities/Compliment';
import { IComplimentsRepository } from '@modules/compliments/repositories/IComplimentsRepository';
import { classToPlain } from 'class-transformer';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  id: string;
}

@injectable()
class ListSendComplimentUseCase {
  constructor(
    @inject('ComplimentsRepository')
    private complimentsRepository: IComplimentsRepository,
  ) {}

  async execute({ id }: IRequest): Promise<Record<string, Compliment>> {
    const compliments = await this.complimentsRepository.listSender(id);
    return classToPlain(compliments);
  }
}

export { ListSendComplimentUseCase };
