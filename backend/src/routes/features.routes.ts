import { Router } from 'express';

import { getFeatures } from '../controllers/features.controller.js';

const router = Router();

router.get('/', getFeatures);

export default router;
