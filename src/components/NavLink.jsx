import { NavLink as RouterNavLink } from "react-router";

export function NavLink({ to, children }) {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "text-green-400" : "hover:text-green-400 transition"
      }
    >
      {children}
    </RouterNavLink>
  );
}
