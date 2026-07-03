import type { Request, Response, NextFunction } from 'express';

export class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode = 500) {
    super(message);
    this.name = 'AppError';
    this.statusCode = statusCode;
  }
}

export const notFoundHandler = (
  _req: Request,
  _res: Response,
  next: NextFunction
) => {
  next(new AppError('Route not found', 404));
};

export const errorHandler = (
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const isAppError = err instanceof AppError;
  const statusCode = isAppError ? err.statusCode : 500;
  const message = isAppError
    ? err.message
    : 'Internal server error';

  if (!isAppError) {
    console.error(err);
  }

  res.status(statusCode).json({ message });
};
