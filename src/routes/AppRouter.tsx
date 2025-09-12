// src/routes/AppRouter.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '*', element: <NotFound /> },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
