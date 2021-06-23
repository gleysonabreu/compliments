import { User, UserRole } from '@modules/users/infra/typeorm/entities/User';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';

import { CreateUserError } from './CreateUserError';

interface IRequest {
  name: string;
  email: string;
  role?: string;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ email, name, role }: IRequest): Promise<User> {
    const emailAlreadyExists = await this.usersRepository.findByEmail(email);
    if (emailAlreadyExists) {
      throw new CreateUserError.UserAlreadyExists();
    }

    if (!(role in UserRole)) {
      throw new CreateUserError.InvalidRole();
    }

    const user = await this.usersRepository.create({
      name,
      email,
      role: role as UserRole,
    });

    return user;
  }
}

export { CreateUserUseCase };
