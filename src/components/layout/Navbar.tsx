import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../../imports/logo.png";
import { NAV_LINKS } from "../../data/navigation";



function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

 

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
      style={{
        background:
          "linear-gradient(180deg, rgba(2,2,3,0.98) 0%, transparent 100%)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* LOGO → HOME */}
      <Link to="/" onClick={() => setMenuOpen(false)}>
        <img
          src={logo}
          alt="UFO.recordz"
          className="h-10 w-auto"
        />
      </Link>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.value}
            to={getPath(link.value)}
            className="font-condensed text-xs tracking-widest transition-colors duration-200"
            style={({ isActive }) => ({
              color: isActive
                ? "#e0e350"
                : "rgba(186, 216, 33, 0.45)",
              letterSpacing: "0.2em",
            })}
          >
            {link.label.toUpperCase()}
          </NavLink>
        ))}

        <a
          href="https://soundcloud.com/uforecordz"
          target="_blank"
          rel="noopener noreferrer"
          className="font-condensed text-xs tracking-widest border px-4 py-2 transition-all duration-200 hover:bg-[#50e3c2] hover:text-black"
          style={{
            borderColor: "rgba(200, 227, 80, 0.4)",
            color: "#d7e350",
            letterSpacing: "0.2em",
          }}
        >
          LISTEN
        </a>
      </div>

      {/* MOBILE BUTTON */}
      <button
        className="md:hidden flex flex-col gap-1.5"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Ouvrir le menu"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="block"
            style={{
              width: i === 1 ? 16 : 22,
              height: 1,
              background: "#50e3c2",
              opacity: i === 1 ? 0.5 : 1,
            }}
          />
        ))}
      </button>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 right-0 flex flex-col p-8 gap-6 md:hidden"
          style={{
            background: "rgba(2,2,3,0.98)",
            borderBottom: "1px solid rgba(80,227,194,0.1)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.value}
              to={getPath(link.value)}
              onClick={() => setMenuOpen(false)}
              className="font-condensed text-sm tracking-widest text-left"
              style={({ isActive }) => ({
                color: isActive
                  ? "#f4f445"
                  : "rgba(226,226,228,0.45)",
                letterSpacing: "0.2em",
              })}
            >
              {link.label.toUpperCase()}
            </NavLink>
          ))}

          <a
            href="https://soundcloud.com/uforecordz"
            target="_blank"
            rel="noopener noreferrer"
            className="font-condensed text-sm tracking-widest"
            style={{
              color: "#d7e350",
              letterSpacing: "0.2em",
            }}
          >
            LISTEN
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;