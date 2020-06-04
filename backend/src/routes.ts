import { Router, IRouter } from 'express';

import HeroController from './controllers/HeroController';

const router: IRouter = Router();

router.get('/heroes', HeroController.index);
router.post('/heroes', HeroController.store);

export default router;
