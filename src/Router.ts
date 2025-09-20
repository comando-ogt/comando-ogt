import AdminPage from "./pages/Home/AdminPage"; // ✅ Ajustado
import App from "./App";
import Competitivo from "./pages/Competitivo";
import { Contacto } from "./pages/Contacto";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "competitivo", Component: Competitivo },
      { path: "contacto", Component: Contacto },
      { path: "admin", Component: AdminPage },
      { path: "*", Component: NotFound },
    ],
  },
]);
