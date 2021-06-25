import { ApiError } from './ApiError';

class JWTInvalidTokenError extends ApiError {
  constructor() {
    super('Wrong authentication token!', 401);
  }
}

export { JWTInvalidTokenError };
