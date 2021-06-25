import { CreateUserUseCaseController } from '@modules/users/useCases/createUser/CreateUserUseCaseController';
import { ListAllUserController } from '@modules/users/useCases/listAllUser/ListAllUserController';
import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const userRoutes = Router();
const createUserUseCaseController = new CreateUserUseCaseController();
const listAllUserController = new ListAllUserController();

userRoutes.post('/', createUserUseCaseController.handle);
userRoutes.get('/', ensureAuthenticated, listAllUserController.handle);

export { userRoutes };
