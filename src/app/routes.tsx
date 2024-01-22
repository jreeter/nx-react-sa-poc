import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Deals, DealsDetail } from '@crvo-ui/deals';
import { Assets } from '@crvo-ui/assets';
import MainLayout from './layouts/main-layout';
import NotFoundPage from './layouts/not-found';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="/deals" replace /> },
      {
        path: '/deals',
        element: <Deals />,
      },
      {
        path: '/deals/:id',
        element: <DealsDetail />,
      },
      {
        path: '/assets',
        element: <Assets />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);

export default router;
