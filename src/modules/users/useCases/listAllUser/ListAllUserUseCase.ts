import { User } from '@modules/users/infra/typeorm/entities/User';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { classToPlain } from 'class-transformer';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListAllUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute(): Promise<Record<string, User>> {
    const users = await this.usersRepository.findAll();
    return classToPlain(users);
  }
}

export { ListAllUserUseCase };
