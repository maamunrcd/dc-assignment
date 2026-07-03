import { Router } from 'express';
import { getHome } from '../controllers/home.controller.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const router = Router();

router.get(
  '/',
  asyncHandler(async (_req, res) => {
    res.json(getHome());
  })
);

export default router;
