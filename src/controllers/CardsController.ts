import { Request, Response } from 'express';

export class CardsController {
  static async getCards(req: Request, res: Response) {
    return res.status(200).json({ message: 'GET Cards working normally!' });
  }
}
