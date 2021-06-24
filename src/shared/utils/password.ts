import auth from '@config/auth';
import bcryptjs from 'bcryptjs';

const hash = async (value: string): Promise<string> => {
  return bcryptjs.hash(value, auth.hashSaltRounds);
};

const compare = async (value: string, hash: string): Promise<boolean> => {
  return bcryptjs.compare(value, hash);
};

export { hash, compare };
