import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../infra/typeorm/entities/User';

interface IUsersRepository {
  findByEmail(email: string): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
  create(user: ICreateUserDTO): Promise<User>;
  findAll(): Promise<User[]>;
}

export { IUsersRepository };
