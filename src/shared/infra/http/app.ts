import 'reflect-metadata';
import 'express-async-errors';
import '../container';
import cors from 'cors';
import express from 'express';

import { HandleErrors } from '@shared/errors/HandleErrors';

import connection from '../database';
import { routes } from './routes';

connection();
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(HandleErrors);

export { app };
