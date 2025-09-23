import AdminPage from "./pages/Home/AdminPage"; // ✅ Ajustado
import App from "./App";
import { Contacto } from "./pages/Contacto";
import { Eventos } from "./pages/Eventos";
import { Home } from "./pages/Home";
import { Miembros } from "./pages/Miembros";
import { NotFound } from "./pages/NotFound";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "eventos", Component: Eventos },
      { path: "miembros", Component: Miembros },
      { path: "contacto", Component: Contacto },
      { path: "admin", Component: AdminPage },
      { path: "*", Component: NotFound },
    ],
  },
]);
