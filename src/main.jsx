import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  RouterProvider,
  createHashRouter,
} from "react-router-dom";

import App from './App.jsx'
import Writing from './components/Writing.jsx'
import Entry from './components/Entry.jsx'
import './styles/index.css'

const router = createHashRouter([
  {
    path: "/writing",
    element: <Writing />,
  },
  {
    path: "/entry/:title",
    element: <Entry />
  },
  {
    path: "/*",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
