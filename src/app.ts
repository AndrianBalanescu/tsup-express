import express from 'express';
import userRoutes from './routes/userRoutes';
import productRoutes from './routes/productRoutes';

const app = express();

app.use(express.json());
app.use('/users', userRoutes);
app.use('/products', productRoutes);

export default app;