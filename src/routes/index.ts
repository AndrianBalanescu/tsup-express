import { Router } from 'express';

const router = Router();

// Define your routes here

router.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

router.get('/test', (req, res) => {
    res.send('Test!');
    }
);

export default router;