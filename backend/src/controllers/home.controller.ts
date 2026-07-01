import type { Request, Response, NextFunction } from 'express';

import homeData from '../data/home.json' with { type: 'json' };

export const getHome = (_req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(homeData);
  } catch (error) {
    next(error);
  }
};
