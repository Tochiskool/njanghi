import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import GithubShow from "./GithubShow/GithubShow"


export const router = createBrowserRouter([
  {
    path: "/njanghi",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path:"/githubshow",
    element: <GithubShow />
  }

])