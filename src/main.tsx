import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './app/routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    {/* Implement necessary auth, logging providers here, etc */}
    <RouterProvider router={router} />
  </StrictMode>
);
