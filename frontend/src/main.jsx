import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import "./index.css";
import "./App.css";
import "aos/dist/aos.css";
import ContextProvider from "./context/ContextProvider";
import "./i18next";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Suspense fallback={<div>load ...</div>}>
            <ContextProvider>
                <RouterProvider router={router} />
            </ContextProvider>
        </Suspense>
    </React.StrictMode>
);
