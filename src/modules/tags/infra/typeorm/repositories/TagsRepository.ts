import { ICreateTagDTO } from '@modules/tags/dtos/ICreateTagDTO';
import { ITagsRepository } from '@modules/tags/repositories/ITagsRepository';
import { getRepository, Repository } from 'typeorm';

import { Tag } from '../entities/Tag';

class TagsRepository implements ITagsRepository {
  private repository: Repository<Tag>;

  constructor() {
    this.repository = getRepository(Tag);
  }

  async findAll(): Promise<Tag[]> {
    const tags = await this.repository.find();
    return tags;
  }

  async findByName(name: string): Promise<Tag | undefined> {
    const tag = await this.repository.findOne({ name });

    return tag;
  }

  async create({ name }: ICreateTagDTO): Promise<Tag> {
    const tag = this.repository.create({ name });

    return this.repository.save(tag);
  }
}

export { TagsRepository };
