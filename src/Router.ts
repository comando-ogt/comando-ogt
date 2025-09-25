import AdminPage from "./pages/Home/AdminPage"; // ✅ Ajustado
import App from "./App";
import { Contact } from "./pages/Contact";
import { Eventos } from "./pages/Eventos";
import { Home } from "./pages/Home";
import { Member } from "./pages/Member";
import { Members } from "./pages/Members";
import { NotFound } from "./pages/NotFound";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "eventos", Component: Eventos },
      { path: "miembros", Component: Members },
      { path: "miembro/:memberId", Component: Member },
      { path: "contacto", Component: Contact },
      { path: "admin", Component: AdminPage },
      { path: "*", Component: NotFound },
    ],
  },
]);
