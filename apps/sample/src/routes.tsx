import React from "react";

import { AppRoutingManager } from "@hippolog/shell-router";
import { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppRoutingManager type="app-sample" />,
    errorElement: <div>App Posting Error</div>,
    children: [
      { index: true, element: <div>APP Posting Root</div> },
      {
        path: "1",
        element: <div>App Posting Page 1</div>,
      },
    ],
  },
];
