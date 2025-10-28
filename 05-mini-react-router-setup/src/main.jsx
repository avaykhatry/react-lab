import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import NotFound from './pages/NotFound.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard/DashboardLayout.jsx';
import Profile from './pages/Profile.jsx';
import Spinach from './pages/Spinach.jsx';
import Popeye from './pages/Popeye.jsx';
import DefaultProfile from './pages/DefaultProfile.jsx';

const router = createBrowserRouter([
  { 
    path:"/",
    element: <App />,
  },
  {
    path:"profile",
    element: <Profile />,
    children: [
      {
        index: true, 
        element: <DefaultProfile />,
      },
      {
        path:"spinach",
        element: <Spinach />,
      },
      {
        path:"popeye",
        element: <Popeye />,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
);
