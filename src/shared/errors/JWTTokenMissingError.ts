import { ApiError } from './ApiError';

class JWTTokenMissingError extends ApiError {
  constructor() {
    super('Token not provided!', 401);
  }
}

export { JWTTokenMissingError };
