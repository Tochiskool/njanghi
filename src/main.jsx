import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./assets/normalize.css";
import "./assets/styles.css";
import { 
  createBrowserRouter,
  RouterProvider
 } from 'react-router-dom';
import About from './routes/About.jsx';
import Contact from './routes/Contact.jsx';
import Projects from './routes/Projects.jsx';

 const router = createBrowserRouter([
  {
    path: "/njanghi",
    element: <App/>,
  },
  {
    path: "/njanghi/about",
    element: <About/>,
  },
  {
    path: "/njanghi/projects",
    element: <Projects/>,
  },
  {
    path: "/njanghi/contact",
    element: <Contact/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
