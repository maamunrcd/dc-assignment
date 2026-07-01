import type { Request, Response, NextFunction } from 'express';

import partnersData from '../data/partners.json' with { type: 'json' };

export const getPartners = (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(partnersData);
  } catch (error) {
    next(error);
  }
};
