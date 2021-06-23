import { ICreateTagDTO } from '../dtos/ICreateTagDTO';
import { Tag } from '../infra/typeorm/entities/Tag';

interface ITagsRepository {
  findByName(name: string): Promise<Tag | undefined>;
  create(tag: ICreateTagDTO): Promise<Tag>;
}

export { ITagsRepository };
