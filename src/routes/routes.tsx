import { RouteObject } from "react-router-dom";
import About from "../pages/About";
import Review from "../pages/Review";
import Top10 from "../pages/Top10";
import HomePage from "../pages/HomePage";
import { MainLayout } from "../pages/MainLayout";
import GameDetailsPage from "../pages/GameDetailsPage";
// import { GameDetailsPage } from "../playground/GameDetailsPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // { index: true, element: <Home /> },
      {
        index: true,
        element: <HomePage />,
        // Add type for context
        handle: { crumb: () => "Home" }, // Optional: if you need breadcrumbs
      },
      { path: "review", element: <Review /> },
      { path: "top-10", element: <Top10 /> },
      { path: "game-details/:id", element: <GameDetailsPage /> },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
];

export default routes;
