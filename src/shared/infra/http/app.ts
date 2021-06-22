import 'reflect-metadata';
import '../container';
import cors from 'cors';
import express from 'express';

import connection from '../database';
import { routes } from './routes';

connection();
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

export { app };
