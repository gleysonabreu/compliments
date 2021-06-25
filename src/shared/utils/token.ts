import auth from '@config/auth';
import jwt, { SignOptions } from 'jsonwebtoken';

interface IJwt {
  name: string;
  email: string;
}

interface ISign {
  payload: string | IJwt | Buffer;
  subject: string;
}

const signOptions = {
  algorithm: 'RS256',
  expiresIn: auth.jwt.duration,
} as SignOptions;

const sign = async ({ payload, subject }: ISign): Promise<string> => {
  return jwt.sign(payload, auth.jwt.privateKey, {
    ...signOptions,
    subject,
  });
};

const verify = async (token: string): Promise<string | object> => {
  return jwt.verify(token, auth.jwt.publicKey);
};

export { sign, verify };
