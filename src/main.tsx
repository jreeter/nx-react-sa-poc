import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import NotFoundPage from './app/layouts/nout-found';
import { Deals } from '@crvo-ui/deals';
import { Assets } from '@crvo-ui/assets';
import MainLayout from './app/layouts/main-layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
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

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
