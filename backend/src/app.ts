import cors from 'cors';
import express from 'express';
import homeRoutes from './routes/home.routes.js';
import sectionsRoutes from './routes/sections.routes.js';
import siteRoutes from './routes/site.routes.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/site', siteRoutes);
app.use('/api/home', homeRoutes);
app.use('/api/sections', sectionsRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
