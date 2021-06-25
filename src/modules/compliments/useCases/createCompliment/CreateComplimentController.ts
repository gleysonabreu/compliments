import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateComplimentUseCase } from './CreateComplimentUseCase';

class CreateComplimentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      message,
      tag_id: tagId,
      user_receiver: userReceiver,
    } = request.body;

    const { id: userSender } = request.user;

    const createComplimentUseCase = container.resolve(CreateComplimentUseCase);
    const compliment = await createComplimentUseCase.execute({
      message,
      tagId,
      userReceiver,
      userSender,
    });

    return response.json(compliment);
  }
}

export { CreateComplimentController };
