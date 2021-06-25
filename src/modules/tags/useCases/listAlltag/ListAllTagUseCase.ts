import { Tag } from '@modules/tags/infra/typeorm/entities/Tag';
import { ITagsRepository } from '@modules/tags/repositories/ITagsRepository';
import { classToPlain } from 'class-transformer';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListAllTagUseCase {
  constructor(
    @inject('TagsRepository')
    private tagsRepository: ITagsRepository,
  ) {}

  async execute(): Promise<Record<string, Tag>> {
    const tags = await this.tagsRepository.findAll();
    return classToPlain(tags);
  }
}

export { ListAllTagUseCase };
