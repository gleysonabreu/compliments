import { ApiError } from '@shared/errors/ApiError';

export class CreateTagError extends ApiError {
  constructor() {
    super('Tag already exists');
  }
}
