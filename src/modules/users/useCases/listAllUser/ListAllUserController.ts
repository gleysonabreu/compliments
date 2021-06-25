import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListAllUserUseCase } from './ListAllUserUseCase';

class ListAllUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllUserUseCase = container.resolve(ListAllUserUseCase);
    const users = await listAllUserUseCase.execute();

    return response.json(users);
  }
}

export { ListAllUserController };
