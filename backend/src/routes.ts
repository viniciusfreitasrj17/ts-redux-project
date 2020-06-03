import { Router } from 'express';

import HeroController from './controllers/HeroController';

const router = Router();

router.get('/', HeroController.index);

export default router;
