import { Outlet, ScrollRestoration } from "react-router";

import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
      <ScrollRestoration />

      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
