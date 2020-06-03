import { Router } from 'express';

import HeroController from './controllers/HeroController';

const router = Router();

router.get('/heroes', HeroController.index);
router.post('/heroes', HeroController.store);

export default router;
