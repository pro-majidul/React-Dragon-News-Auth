import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import Provider from "./provider/Provider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>

    <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
