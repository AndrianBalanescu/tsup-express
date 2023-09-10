import express, { Request, Response, NextFunction } from 'express';
import { getProfile, postProfile } from './controllers/gitController';
import { logger  } from './config/logger';
import indexRouter from './routes/index';
import userRoutes from './routes/userRoutes';
import productRoutes from './routes/productRoutes';
import { loggerMiddleware } from './controllers/gitController';

const app = express();
const port = 3000;

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(loggerMiddleware);
app.use('/', indexRouter);
app.use('/users', userRoutes);
app.use('/products', productRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});