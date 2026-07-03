import { Router } from 'express';
import { getSiteData } from '../controllers/site.controller.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const router = Router();

router.get(
  '/',
  asyncHandler(async (_req, res) => {
    res.json(getSiteData());
  })
);

export default router;
