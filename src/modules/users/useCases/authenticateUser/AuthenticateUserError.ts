import { ApiError } from '@shared/errors/ApiError';

class AuthenticateUserError extends ApiError {
  constructor() {
    super('Email or password incorrect');
  }
}

export { AuthenticateUserError };
