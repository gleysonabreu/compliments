import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListReceiverComplimentUseCase } from './ListReceiverComplimentUseCase';

class ListReceiverComplimentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listReceiverComplimentUseCase = container.resolve(
      ListReceiverComplimentUseCase,
    );
    const compliments = await listReceiverComplimentUseCase.execute({ id });
    return response.json(compliments);
  }
}

export { ListReceiverComplimentController };
