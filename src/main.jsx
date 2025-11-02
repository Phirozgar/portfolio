import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Blog from './components/Blog.jsx';
import ProfileSelect from './components/ProfileSelect.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProfileSelect />,
  },
  {
    path: '/recruiter',
    element: <App />,
  },
  {
    path: '/student',
    element: <Blog />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
