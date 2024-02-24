import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./components/Home";
import CharacterDetail from "./components/character/CharacterDetail";

import "./styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/character/:id",
    element: <CharacterDetail />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
