
import express from 'express';
import { getProfile ,postProfile} from './controllers/gitController';
import { Request, Response, NextFunction } from 'express';
import { logger } from './config/logger';
logger.info('Hello world');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.get('/gitit', getProfile);
app.get('/test', getProfile);

app.post('/gitit', postProfile);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});