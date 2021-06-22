import { CreateUserUseCaseController } from '@modules/users/useCases/createUser/CreateUserUseCaseController';
import { Router } from 'express';

const userRoutes = Router();
const createUserUseCaseController = new CreateUserUseCaseController();

userRoutes.post('/', createUserUseCaseController.handle);

export { userRoutes };
