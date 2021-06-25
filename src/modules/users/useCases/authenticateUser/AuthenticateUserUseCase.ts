import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';

import { compare } from '@shared/utils/password';
import { sign } from '@shared/utils/token';

import { AuthenticateUserError } from './AuthenticateUserError';

interface IRequest {
  password: string;
  email: string;
}

interface IUser {
  email: string;
  name: string;
}
interface IResponse {
  token: string;
  user: IUser;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);
    if (!user) {
      throw new AuthenticateUserError();
    }

    if (!(await compare(password, user.password))) {
      throw new AuthenticateUserError();
    }

    const token = await sign({
      payload: {
        email: user.email,
        name: user.name,
      },
      subject: user.id,
    });

    return { token, user: { email: user.email, name: user.name } };
  }
}

export { AuthenticateUserUseCase };
