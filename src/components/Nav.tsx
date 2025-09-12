import { NavLink } from "./NavLink";
import clsx from "clsx";

export function Nav() {
  return (
    <header
      className={clsx(
        "top-0",
        "z-50",
        "sticky",
        "bg-black/90",
        "shadow-lg",
        "backdrop-blur-sm",
        "border-green-400",
        "border-b",
        "w-full"
      )}
    >
      <div className="flex justify-between items-center mx-auto px-6 py-4 max-w-7xl">
        <h1 className="drop-shadow-lg font-bold text-green-400 text-2xl">
          Comando OGT
        </h1>
        <nav className="flex space-x-6 font-semibold text-lg">
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/competitivo">Competitivo</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
        </nav>
      </div>
    </header>
  );
}
