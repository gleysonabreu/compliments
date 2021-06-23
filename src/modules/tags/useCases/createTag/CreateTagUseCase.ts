import { Tag } from '@modules/tags/infra/typeorm/entities/Tag';
import { ITagsRepository } from '@modules/tags/repositories/ITagsRepository';
import { inject, injectable } from 'tsyringe';

import { CreateTagError } from './CreateTagError';

interface IRequest {
  name: string;
}

@injectable()
class CreateTagUseCase {
  constructor(
    @inject('TagsRepository')
    private tagsRepository: ITagsRepository,
  ) {}

  async execute({ name }: IRequest): Promise<Tag> {
    const tagByName = await this.tagsRepository.findByName(name);
    if (tagByName) {
      throw new CreateTagError();
    }

    const tag = await this.tagsRepository.create({ name });
    return tag;
  }
}

export { CreateTagUseCase };
