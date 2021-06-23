import { NextFunction, Request, Response } from 'express';

import { ApiError } from './ApiError';

async function HandleErrors(
  error: Error,
  request: Request,
  response: Response,
  _next: NextFunction,
): Promise<Response> {
  if (error instanceof ApiError) {
    return response.status(error.statusCode).json({
      message: error.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal server error: ${error.message}`,
  });
}

export { HandleErrors };
