import { ICreateTagDTO } from '../dtos/ICreateTagDTO';
import { Tag } from '../infra/typeorm/entities/Tag';

interface ITagsRepository {
  findByName(name: string): Promise<Tag | undefined>;
  create(tag: ICreateTagDTO): Promise<Tag>;
  findAll(): Promise<Tag[]>;
  findTagById(id: string): Promise<Tag | undefined>;
}

export { ITagsRepository };
