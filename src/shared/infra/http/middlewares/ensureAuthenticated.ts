import { NextFunction, Response, Request } from 'express';

import { JWTInvalidTokenError } from '@shared/errors/JWTInvalidTokenError';
import { JWTTokenMissingError } from '@shared/errors/JWTTokenMissingError';
import { verify } from '@shared/utils/token';

interface IJwtFormat {
  sub: string;
  email: string;
  name: string;
}

async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  const authHeader = request.headers.authorization;
  if (authHeader) {
    const [, token] = authHeader.split(' ');
    try {
      const { sub, email, name } = (await verify(token)) as IJwtFormat;

      request.user = {
        id: sub,
        email,
        name,
      };

      return next();
    } catch (error) {
      return next(new JWTInvalidTokenError());
    }
  } else {
    return next(new JWTTokenMissingError());
  }
}

export { ensureAuthenticated };
