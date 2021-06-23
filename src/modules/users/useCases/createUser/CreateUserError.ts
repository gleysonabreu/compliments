import { ApiError } from '@shared/errors/ApiError';

export namespace CreateUserError {
  export class UserAlreadyExists extends ApiError {
    constructor() {
      super('User already exists');
    }
  }

  export class InvalidRole extends ApiError {
    constructor() {
      super('Invalid role');
    }
  }
}
