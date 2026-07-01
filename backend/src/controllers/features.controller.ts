import type { Request, Response, NextFunction } from 'express';

import featuresData from '../data/features.json' with { type: 'json' };

export const getFeatures = (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(featuresData);
  } catch (error) {
    next(error);
  }
};
