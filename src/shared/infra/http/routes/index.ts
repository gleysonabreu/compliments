import { Router } from 'express';

import { tagRoutes } from './tag.routes';
import { userRoutes } from './user.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/tags', tagRoutes);

export { routes };
