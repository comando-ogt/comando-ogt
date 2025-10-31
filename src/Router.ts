import { AdminPage } from "./pages/Admin";
import App from "./App";
import { Contact } from "./pages/Contact";
import { Eventos } from "./pages/Eventos";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Member } from "./pages/Member";
import { Members } from "./pages/Members";
import { NotFound } from "./pages/NotFound";
import { Register } from "./pages/Register";
import { createHashRouter } from "react-router";

export const router = createHashRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "eventos", Component: Eventos },
      { path: "miembros", Component: Members },
      { path: "miembro/:memberUrl", Component: Member },
      { path: "contacto", Component: Contact },
      { path: "login", Component: Login },
      { path: "enlistamiento", Component: Register },
      { path: "admin", Component: AdminPage },
      { path: "*", Component: NotFound },
    ],
  },
]);
