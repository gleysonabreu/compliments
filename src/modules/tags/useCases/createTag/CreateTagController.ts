import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateTagUseCase } from './CreateTagUseCase';

class CreateTagController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createTagUseCase = container.resolve(CreateTagUseCase);
    const tag = await createTagUseCase.execute({ name });

    return response.json(tag);
  }
}

export { CreateTagController };
