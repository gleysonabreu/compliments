import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { getRepository, Repository } from 'typeorm';

import { User, UserRole } from '../entities/User';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async findAll(): Promise<User[]> {
    const users = await this.repository.find();
    return users;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  async findById(id: string): Promise<User | undefined> {
    const user = await this.repository.findOne({ id });
    return user;
  }

  async create({ email, name, role, password }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      email,
      name,
      role,
      password,
    });

    return this.repository.save(user);
  }
}
export { UsersRepository };
