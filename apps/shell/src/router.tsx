import React, { Suspense } from "react";

import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { appSampleBasename, appBlogBasename } from "./constants/prefix";
import Layout from "./components/Layout";

const AppBlogLazy = React.lazy(() => import("./components/app-sample"));

const AppNextLazy = React.lazy(() => import("./components/app-next"));

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to={appSampleBasename} />,
      },
      {
        path: `${appSampleBasename}/*`,
        element: (
          <Suspense fallback="Loading Posting...">
            <AppBlogLazy />
          </Suspense>
        ),
      },
      {
        path: `${appBlogBasename}/*`,
        element: (
          <Suspense fallback="Loading Posting...">
            <AppNextLazy />
          </Suspense>
        ),
      },
    ],
  },
]);
const Router = () => {
  return <RouterProvider router={browserRouter} />;
};

export default Router;
