import { RouteObject } from "react-router-dom";
import About from "../playground/About";
import Review from "../playground/Review";
import Top10 from "../playground/Top10";
import Home from "../playground/Home";
import { MainPage } from "../pages/MainPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainPage />,
    children: [
      // { index: true, element: <Home /> },
      {
        index: true,
        element: <Home />,
        // Add type for context
        handle: { crumb: () => "Home" }, // Optional: if you need breadcrumbs
      },
      { path: "review", element: <Review /> },
      { path: "top-10", element: <Top10 /> },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
];

export default routes;
