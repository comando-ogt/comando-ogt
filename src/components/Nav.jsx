import { NavLink } from "./NavLink";

export function Nav() {
  return (
    <header className="bg-black backdrop-blur-md fixed w-full top-0 left-0 z-50 shadow-lg border-b border-green-400">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-400 drop-shadow-lg">
          Comando OGT
        </h1>
        <nav className="flex space-x-6 text-lg font-semibold">
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/competitivo">Competitivo</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
        </nav>
      </div>
    </header>
  );
}
