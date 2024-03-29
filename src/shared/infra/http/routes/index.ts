import { Router } from 'express';

import { authRoutes } from './auth.routes';
import { complimentRoutes } from './compliment.routes';
import { tagRoutes } from './tag.routes';
import { userRoutes } from './user.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/tags', tagRoutes);
routes.use('/auth', authRoutes);
routes.use('/compliments', complimentRoutes);

export { routes };
