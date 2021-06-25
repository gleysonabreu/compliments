import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListAllTagUseCase } from './ListAllTagUseCase';

class ListAllTagController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllTagController = container.resolve(ListAllTagUseCase);
    const tags = await listAllTagController.execute();

    return response.json(tags);
  }
}

export { ListAllTagController };
