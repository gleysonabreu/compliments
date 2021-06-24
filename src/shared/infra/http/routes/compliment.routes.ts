import { CreateComplimentController } from '@modules/compliments/useCases/createCompliment/CreateComplimentController';
import { Router } from 'express';

const complimentRoutes = Router();
const createComplimentController = new CreateComplimentController();

complimentRoutes.post('/', createComplimentController.handle);

export { complimentRoutes };
