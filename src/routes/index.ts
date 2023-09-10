// @ts-nocheck
import { Router } from 'express';
import { getProfile ,postProfile} from '../controllers/gitController';
import { loggerMiddleware } from '../controllers/gitController';

const router = Router();

router.use(loggerMiddleware);

router.get('/', (req, res) => {
    res.send('Hello World!');
    }
);
router.get('/test2', (req, res) => {
    res.send('Test!');
    }
);
router.get('/gitit', getProfile);
router.get('/test', getProfile);
router.post('/gitit', postProfile);

export default router;