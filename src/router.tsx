import { createBrowserRouter } from "react-router";
import Root from "./routes/root";
import Home from "./features/home/home";
import About from "./features/about/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
    ],
  },
]);

export default router;
