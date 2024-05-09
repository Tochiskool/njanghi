import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/normalize.css";
import "./assets/styles.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";
import "bulma/css/bulma.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
