import { NextFunction, Response, Request } from 'express';

async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const admin = true;

  if (admin) {
    return next();
  }

  return response.status(401).json({
    message: 'Unauthorized',
  });
}

export { ensureAdmin };
