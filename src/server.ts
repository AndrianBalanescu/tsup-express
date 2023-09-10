import express, { Request, Response, NextFunction } from 'express';
import { loggerMiddleware } from './controllers/gitController';
// ************ 1. Import the router ************
import indexRouter from './routes/index';
import userRoutes from './routes/userRoutes';
import productRoutes from './routes/productRoutes';


const app = express();
const port = 3000;
// ************ middlewares ************
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(loggerMiddleware);

// ************ use router ************
app.use('/', indexRouter);
app.use('/users', userRoutes);
app.use('/products', productRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});