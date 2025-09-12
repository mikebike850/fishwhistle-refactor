// src/App.tsx
import AppRouter from './routes/AppRouter';
import { SearchProvider } from './context/SearchProvider';

export default function App() {
  return (
    <SearchProvider>
      <AppRouter />
    </SearchProvider>
  );
}
