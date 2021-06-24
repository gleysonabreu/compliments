import { ApiError } from '@shared/errors/ApiError';

export namespace CreateComplimentError {
  export class UserReceiver extends ApiError {
    constructor() {
      super('User receiver not exists!');
    }
  }

  export class UserReceiverAndSenderAreSame extends ApiError {
    constructor() {
      super("User's receiver and sender are the same");
    }
  }
}
