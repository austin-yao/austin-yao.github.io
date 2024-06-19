import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import Writing from './components/writing.jsx'
import Entry from './components/entry.jsx'
import './styles/index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/writing",
    element: <Writing />,
  },
  {
    path: "/entry/:title",
    element: <Entry />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
