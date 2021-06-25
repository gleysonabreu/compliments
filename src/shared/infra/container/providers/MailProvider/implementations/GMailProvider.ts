import fs from 'fs';
import handlebars from 'handlebars';
import nodemailer, { Transporter } from 'nodemailer';
import { injectable } from 'tsyringe';

import { IMailProvider, IMailProps } from '../IMailProvider';

@injectable()
class GMailProvider implements IMailProvider {
  private client: Transporter;

  constructor() {
    this.client = nodemailer.createTransport({
      host: process.env.GMAIL_HOST,
      port: Number(process.env.GMAIL_PORT),
      secure: process.env.GMAIL_SECURE === 'true',

      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });
  }

  async sendMail({ to, path, subject, variables }: IMailProps): Promise<void> {
    const templateContent = fs.readFileSync(path).toString('utf-8');
    const templateParse = handlebars.compile(templateContent);
    const templateHTML = templateParse(variables);

    await this.client.sendMail({
      to,
      from: process.env.MAIL_PROVIDER_FROM,
      subject,
      html: templateHTML,
    });
  }
}

export { GMailProvider };
