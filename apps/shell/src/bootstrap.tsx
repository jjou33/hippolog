import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import "@hippolog/ui-kit/index.css";
import "./index.css";

createRoot(document.getElementById("app")!).render(<App />);
