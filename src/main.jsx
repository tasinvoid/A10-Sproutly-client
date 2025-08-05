import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Components/Root.jsx";
import Home from "./Pages/Home.jsx";
import ExploreGardeners from "./Pages/ExploreGardeners.jsx";
import BrowseTips from "./Pages/BrowseTips.jsx";
import ShareTip from "./Pages/ShareTip.jsx";
import MyTips from "./Pages/MyTips.jsx";
import LogIn from "./Pages/LogIn.jsx";
import Register from "./Pages/Register.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";
import TipsDetails from "./Pages/TipsDetails.jsx";
import EditTip from "./Pages/EditTip.jsx";
import PrivateRoute from "./Components/PrivateRoute.jsx";
import ErrorBoundary from "./Pages/ErrorBoundary.jsx";
import { ThemeProvider } from "./contexts/themeContext.jsx";
import ClientThemeWrapper from "./contexts/clientThemeWrapper.jsx";
import Loading from "./Components/Loading.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorBoundary></ErrorBoundary>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("https://sproutly-server.vercel.app/gardeners"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/exploreGardeners",
        Component: ExploreGardeners,
        loader: () =>
          fetch("https://sproutly-server.vercel.app/exploreGardeners"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/browseTips",
        Component: BrowseTips,
        loader: () => fetch("https://sproutly-server.vercel.app/sharedTips"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/browseTips/:id",
        element: (
          <PrivateRoute>
            <TipsDetails></TipsDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://sproutly-server.vercel.app/sharedTips/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/shareTip",
        element: (
          <PrivateRoute>
            <ShareTip></ShareTip>
          </PrivateRoute>
        ),
      },
      {
        path: "/myTips",
        element: (
          <PrivateRoute>
            <MyTips></MyTips>
          </PrivateRoute>
        ),
      },
      {
        path: "/editTip/:id",
        element: (
          <PrivateRoute>
            <EditTip></EditTip>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://sproutly-server.vercel.app/sharedTips/${params.id}`),
        errorElement: <ErrorBoundary></ErrorBoundary>,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/logIn",
        Component: LogIn,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <ClientThemeWrapper>
          <RouterProvider router={router} />
        </ClientThemeWrapper>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
