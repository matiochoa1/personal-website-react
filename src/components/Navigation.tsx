import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <div className="relative group">
        <div className="absolute inset-0 transition duration-200 rounded-lg opacity-75 bg-gradient-to-r from-red-700 to-purple-900 blur-xl group-hover:opacity-100"></div>
        <nav className="relative flex items-center justify-center gap-4 py-4 leading-none rounded-lg cursor-pointer bg-slate-900 px-7">
          <NavLink
            to="/portfolio/about-me"
            className={({ isActive }) =>
              isActive
                ? "text-red-700 font-bold transition-colors p-1 text-lg"
                : "text-white font-bold hover:text-red-700 transition-colors p-1 text-lg"
            }
          >
            About Me
          </NavLink>

          <NavLink
            to="/portfolio/projects"
            className={({ isActive }) =>
              isActive
                ? "text-red-700 font-bold transition-colors p-1 text-lg"
                : "text-white font-bold hover:text-red-700 transition-colors p-1 text-lg"
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/portfolio/knowledge"
            className={({ isActive }) =>
              isActive
                ? "text-red-700 font-bold transition-colors p-1 text-lg"
                : "text-white font-bold hover:text-red-700 transition-colors p-1 text-lg"
            }
          >
            Knowledge
          </NavLink>

          <NavLink
            to="/portfolio/contact"
            className={({ isActive }) =>
              isActive
                ? "text-red-700 font-bold transition-colors p-1 text-lg"
                : "text-white font-bold hover:text-red-700 transition-colors p-1 text-lg"
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </>
  );
}
