import { container } from 'tsyringe';

import { IMailProvider } from './IMailProvider';
import { GMailProvider } from './implementations/GMailProvider';

const mailProvider = {
  gmail: container.resolve(GMailProvider),
};

container.registerInstance<IMailProvider>(
  'MailProvider',
  mailProvider[process.env.MAIL_PROVIDER],
);
