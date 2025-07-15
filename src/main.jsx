import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router";
import { Toaster } from "react-hot-toast";
import store from "./Redux/store";
import { Provider } from "react-redux";
import i18n from "./i18n";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Toaster />
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    />
  </Provider>
);
