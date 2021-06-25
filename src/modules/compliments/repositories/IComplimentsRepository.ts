import { ICreateComplimentDTO } from '../dtos/ICreateComplimentDTO';
import { Compliment } from '../infra/typeorm/entities/Compliment';

interface IComplimentsRepository {
  create(compliment: ICreateComplimentDTO): Promise<Compliment>;
  listSender(userSender: string): Promise<Compliment[]>;
  listReceiver(userReceiver: string): Promise<Compliment[]>;
}

export { IComplimentsRepository };
