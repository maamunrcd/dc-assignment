import { Router } from 'express';
import {
  getHeroSection,
  getShowcaseSection,
  getSolutionsSection,
  getTechStackSection,
  getTrustedBySection,
} from '../controllers/sections.controller.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const router = Router();

router.get(
  '/hero',
  asyncHandler(async (_req, res) => {
    res.json(getHeroSection());
  })
);

router.get(
  '/trusted-by',
  asyncHandler(async (_req, res) => {
    res.json(getTrustedBySection());
  })
);

router.get(
  '/solutions',
  asyncHandler(async (_req, res) => {
    res.json(getSolutionsSection());
  })
);

router.get(
  '/showcase',
  asyncHandler(async (_req, res) => {
    res.json(getShowcaseSection());
  })
);

router.get(
  '/tech-stack',
  asyncHandler(async (_req, res) => {
    res.json(getTechStackSection());
  })
);

export default router;
