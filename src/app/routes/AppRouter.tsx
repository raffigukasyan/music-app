import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Layout } from '@/app/layout/index.ts';
import { Main } from '@/pages/Main/Main.tsx';
import { Register } from '@/pages/Auth/ui/Register';
export default function AppRouter() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Main />,
        },
      ],
    },
    {
      path: '/registration',
      element: <Register />,
    },
  ]);

  return <RouterProvider router={routes} />;
}
