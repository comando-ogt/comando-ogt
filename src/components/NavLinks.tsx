import { NavLink } from "./NavLink";

interface Props {
  className?: string;
}

export function NavLinks({ className }: Props) {
  return (
    <>
      <NavLink to="/" className={className}>
        Inicio
      </NavLink>
      <NavLink to="/eventos" className={className}>
        Eventos
      </NavLink>
      <NavLink to="/miembros" className={className}>
        Miembros
      </NavLink>
      <NavLink to="/contacto" className={className}>
        Contacto
      </NavLink>
    </>
  );
}
