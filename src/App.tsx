import { Outlet, ScrollRestoration } from "react-router";

import { AuthWrapper } from "./components/AuthWrapper";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
      <ScrollRestoration />

      <div className="flex flex-col min-w-screen min-h-screen">
        <Nav />

        <AuthWrapper>
          <Outlet />
        </AuthWrapper>

        <Footer />
      </div>
    </>
  );
}

export default App;
