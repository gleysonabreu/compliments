import { User, UserRole } from '@modules/users/infra/typeorm/entities/User';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';

import { hash } from '@shared/utils/password';

import { CreateUserError } from './CreateUserError';

interface IRequest {
  name: string;
  email: string;
  role?: string;
  password: string;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ email, name, role, password }: IRequest): Promise<User> {
    const emailAlreadyExists = await this.usersRepository.findByEmail(email);
    if (emailAlreadyExists) {
      throw new CreateUserError.UserAlreadyExists();
    }

    if (!(role in UserRole)) {
      throw new CreateUserError.InvalidRole();
    }

    const newPasswordHash = await hash(password);
    const user = await this.usersRepository.create({
      name,
      email,
      role: role as UserRole,
      password: newPasswordHash,
    });

    return user;
  }
}

export { CreateUserUseCase };
