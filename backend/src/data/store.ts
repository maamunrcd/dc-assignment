import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

type HomeContent = typeof import('./home.json');
type SiteContent = typeof import('./site.json');

const dataDir = dirname(fileURLToPath(import.meta.url));

const loadJson = <T>(filename: string): T =>
  JSON.parse(readFileSync(join(dataDir, filename), 'utf8')) as T;

export const homeData = loadJson<HomeContent>('home.json');
export const siteData = loadJson<SiteContent>('site.json');
