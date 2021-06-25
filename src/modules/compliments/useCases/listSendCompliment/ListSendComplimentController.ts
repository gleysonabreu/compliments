import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListSendComplimentUseCase } from './ListSendComplimentUseCase';

class ListSendComplimentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listSendComplimentUseCase = container.resolve(
      ListSendComplimentUseCase,
    );
    const compliments = await listSendComplimentUseCase.execute({ id });
    return response.json(compliments);
  }
}

export { ListSendComplimentController };
