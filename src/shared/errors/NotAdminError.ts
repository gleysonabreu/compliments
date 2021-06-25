import { ApiError } from './ApiError';

class NotAdminError extends ApiError {
  constructor() {
    super('This user is not an admin!', 401);
  }
}

export { NotAdminError };
