import { Outlet, ScrollRestoration } from "react-router";

import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
      <ScrollRestoration />

      <div className="flex flex-col min-w-screen min-h-screen">
        <Nav />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
