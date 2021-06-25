import { CreateTagController } from '@modules/tags/useCases/createTag/CreateTagController';
import { ListAllTagController } from '@modules/tags/useCases/listAlltag/ListAllTagController';
import { Router } from 'express';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const tagRoutes = Router();
const createTagController = new CreateTagController();
const listAllTagController = new ListAllTagController();

tagRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle,
);
tagRoutes.get('/', ensureAuthenticated, listAllTagController.handle);

export { tagRoutes };
