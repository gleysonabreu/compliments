import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserUseCaseController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, role } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);
    await createUserUseCase.execute({ name, email, role });

    return response.send();
  }
}

export { CreateUserUseCaseController };
