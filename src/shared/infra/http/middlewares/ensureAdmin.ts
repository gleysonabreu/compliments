import { UserRole } from '@modules/users/infra/typeorm/entities/User';
import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository';
import { NextFunction, Response, Request } from 'express';

import { NotAdminError } from '@shared/errors/NotAdminError';

async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  const { user } = request;
  const usersRepository = new UsersRepository();
  const { role } = await usersRepository.findById(user.id);

  if (role === UserRole.ADMIN) {
    return next();
  }

  return next(new NotAdminError());
}

export { ensureAdmin };
