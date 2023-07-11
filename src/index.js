import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home';
import Javascript from './pages/javascript';
import Html from './pages/html';
import Css from './pages/css';

const router = createBrowserRouter([
  // path: "/javascript",
  // element: <Javascript/>,


  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Error 404 .......</h1>
  },
  {
    path: "/javascript",
    element: <Javascript />,
  },
  {
    path: "/html",
    element: <Html />,
  },
  {
    path: "/css",
    element: <Css />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
