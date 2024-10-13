import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import { ContextProvider } from './contexts/ContextProvider.jsx';
import './index.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
    {/* <App /> */}
  </StrictMode>,
)
