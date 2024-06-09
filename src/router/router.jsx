import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Team from "../Pages/Team";
import Contact from "../Pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "team",
        element: <Team></Team>,
      },
      {
        path: "Contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
