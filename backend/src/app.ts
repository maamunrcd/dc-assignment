import cors from 'cors';
import express from 'express';

import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';
import featuresRoutes from './routes/features.routes.js';
import homeRoutes from './routes/home.routes.js';
import partnersRoutes from './routes/partners.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/home', homeRoutes);
app.use('/api/features', featuresRoutes);
app.use('/api/partners', partnersRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
