import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Movie from "./components/movie.jsx";
import ComponenteMaterialUi from "./components/ComponenteMaterialUI.jsx";
import Books from "./components/books.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Películas",
    element: <Movie />,
  },
  {
    path: "/ComponenteMateriaUi",
    element: <ComponenteMaterialUi />,
  },
  {
    path: "/books",
    element: <Books />,
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
