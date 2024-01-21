import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Deals } from '@crvo-ui/deals';
import { Assets } from '@crvo-ui/assets';
import MainLayout from './layouts/main-layout';
import NotFoundPage from './layouts/not-found';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,

    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <Navigate to="/deals" replace /> },
      {
        path: '/deals',
        element: <Deals />,
      },
      {
        path: '/assets',
        element: <Assets />,
      },
    ],
  },
]);

export default router;
