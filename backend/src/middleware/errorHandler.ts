import type { Request, Response, NextFunction } from 'express';

export class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const notFoundHandler = (
  _req: Request,
  _res: Response,
  next: NextFunction
) => {
  next(new AppError('Resource not found', 404));
};

export const errorHandler = (
  err: AppError | Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const statusCode = 'statusCode' in err ? err.statusCode : 500;
  const message = err.message || 'Internal server error';

  res.status(statusCode).json({ message });
};
