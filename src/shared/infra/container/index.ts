import { ComplimentsRepository } from '@modules/compliments/infra/typeorm/repositories/ComplimentsRepository';
import { IComplimentsRepository } from '@modules/compliments/repositories/IComplimentsRepository';
import { TagsRepository } from '@modules/tags/infra/typeorm/repositories/TagsRepository';
import { ITagsRepository } from '@modules/tags/repositories/ITagsRepository';
import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { container } from 'tsyringe';

import './providers';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ITagsRepository>('TagsRepository', TagsRepository);

container.registerSingleton<IComplimentsRepository>(
  'ComplimentsRepository',
  ComplimentsRepository,
);
