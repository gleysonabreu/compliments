import { User, UserRole } from '@modules/users/infra/typeorm/entities/User';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';

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
    if (!(role in UserRole)) {
      throw new Error('Invalid role');
    }

    if (!email) {
      throw new Error('Invalid email');
    }

    const emailAlreadyExists = await this.usersRepository.findByEmail(email);
    if (emailAlreadyExists) {
      throw new Error('User already exists');
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
