interface IMailProps {
  to: string;
  subject: string;
  variables: any;
  path: string;
}
interface IMailProvider {
  sendMail(mail: IMailProps): Promise<void>;
}

export { IMailProvider, IMailProps };
