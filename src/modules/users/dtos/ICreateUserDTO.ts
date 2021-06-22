import { UserRole } from '../infra/typeorm/entities/User';

interface ICreateUserDTO {
  name: string;
  email: string;
  role?: UserRole;
}

export { ICreateUserDTO };
