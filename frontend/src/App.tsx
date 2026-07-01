import { AppProviders } from '@/components/Providers/AppProviders';
import { AppRoutes } from '@/routes';

function App() {
  return (
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  );
}

export default App;
