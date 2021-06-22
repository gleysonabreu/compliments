import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { getRepository, Repository } from 'typeorm';

import { User, UserRole } from '../entities/User';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  async create({ email, name, role }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      email,
      name,
      role,
    });

    return this.repository.save(user);
  }
}
export { UsersRepository };
