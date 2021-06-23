import { CreateTagController } from '@modules/tags/useCases/createTag/CreateTagController';
import { Router } from 'express';

import { ensureAdmin } from '../middlewares/ensureAdmin';

const tagRoutes = Router();
const createTagController = new CreateTagController();

tagRoutes.post('/', ensureAdmin, createTagController.handle);

export { tagRoutes };
