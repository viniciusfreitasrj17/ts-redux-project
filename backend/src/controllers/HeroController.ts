import { Request, Response } from 'express';

import Hero from '../schemas/Hero';

class HeroController {
  public async index(req: Request, res: Response): Promise<Response> {
    const heros = await Hero.find();

    return res.json(heros);
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const hero = await Hero.create(req.body);

    return res.json(hero);
  }
}

export default new HeroController();
