import { CreateComplimentController } from '@modules/compliments/useCases/createCompliment/CreateComplimentController';
import { ListReceiverComplimentController } from '@modules/compliments/useCases/listReceiverCompliment/ListReceiverComplimentController';
import { ListSendComplimentController } from '@modules/compliments/useCases/listSendCompliment/ListSendComplimentController';
import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const complimentRoutes = Router();
const createComplimentController = new CreateComplimentController();
const listSendComplimentController = new ListSendComplimentController();
const listReceiverComplimentController = new ListReceiverComplimentController();

complimentRoutes.post(
  '/',
  ensureAuthenticated,
  createComplimentController.handle,
);
complimentRoutes.get(
  '/send',
  ensureAuthenticated,
  listSendComplimentController.handle,
);
complimentRoutes.get(
  '/receiver',
  ensureAuthenticated,
  listReceiverComplimentController.handle,
);

export { complimentRoutes };
