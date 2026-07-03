import { ErrorBoundary } from '@/components/ErrorBoundary';
import { AppProviders } from '@/components/Providers/AppProviders';
import { BaseRoutes } from '@/routes';

function App() {
  return (
    <AppProviders>
      <ErrorBoundary>
        <BaseRoutes />
      </ErrorBoundary>
    </AppProviders>
  );
}

export default App;
