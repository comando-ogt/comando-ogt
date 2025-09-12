import { createBrowserRouter } from "react-router";
import App from "./App";
import { Competitivo } from "./pages/Competitivo";
import { Contacto } from "./pages/Contacto";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "competitivo", Component: Competitivo },
      { path: "contacto", Component: Contacto },
      /* {
        path: "auth",
        Component: AuthLayout,
        children: [
          { path: "login", Component: Login },
          { path: "register", Component: Register },
        ],
      },
      {
        path: "concerts",
        children: [
          { index: true, Component: ConcertsHome },
          { path: ":city", Component: ConcertsCity },
          { path: "trending", Component: ConcertsTrending },
        ],
      }, */
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);
