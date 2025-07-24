import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router";
import { Toaster } from "react-hot-toast";
import store from "./Redux/store";
import { Provider } from "react-redux";
import i18n from "./i18n";

// Utility to set favicon dynamically
const setFavicon = url => {
  let link = document.querySelector("link[rel*='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "shortcut icon";
    document.head.appendChild(link);
  }
  link.href = url;
};

const baseUrl = import.meta.env.VITE_SERVER_BASE_URL;
const imgBaseUrl = import.meta.env.VITE_SERVER_URL;

// Fetch and apply favicon
fetch(`${baseUrl}/favicon`)
  .then(res => {
    if (!res.ok) {
      throw new Error("Failed to fetch favicon");
    }
    return res.json();
  })
  .then(data => {
    const relativePath = data?.data;
    if (relativePath) {
      const fullUrl = `${imgBaseUrl}/${relativePath}`;
      setFavicon(fullUrl);
    }
  })
  .catch(err => {
    console.error("Favicon fetch error:", err);
  });

createRoot(document.getElementById("root")).render(
  <StrictMode>
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
  </StrictMode>
);
