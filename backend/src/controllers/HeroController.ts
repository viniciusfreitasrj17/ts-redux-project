import { Request, Response } from 'express';

class HeroController {
  public async index(req: Request, res: Response): Promise<Response> {
    return res.send('Hello World !!!');
  }
}

export default new HeroController();
