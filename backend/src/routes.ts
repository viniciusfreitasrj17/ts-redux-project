import { Router } from 'express';

import HeroController from './controllers/HeroController';

const router = Router();

router.get('/heros', HeroController.index);
router.post('/heros', HeroController.store);

export default router;
