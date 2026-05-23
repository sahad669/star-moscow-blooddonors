import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinkClass = ({ isActive }) =>
    `rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
      isActive
        ? "bg-red-600 text-white shadow-sm"
        : "text-slate-700 hover:bg-red-50 hover:text-red-600"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-red-100/80 bg-white/90 backdrop-blur-md shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between sm:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex min-w-0 items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <img
              src="/images/star-mosco-icon.png"
              alt="Star Moscow Blood Donors logo"
              className="h-35 shrink-0 rounder-xl object-contain"
            />

            <div className="min-w-0">
              <p className="truncate text-sm font-extrabold tracking-wide text-slate-900 sm:text-base">
                Star Moscow
              </p>
              <p className="truncate text-xs font-medium text-red-600 sm:text-sm">
                Blood Donors
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-2 sm:flex">
            <NavLink to="/" onClick={handleScrollTop} className={navLinkClass}>
              Home
            </NavLink>

            <NavLink
              to="/donor"
              onClick={handleScrollTop}
              className={navLinkClass}
            >
              Donors
            </NavLink>

            <NavLink
              to="/register"
              onClick={handleScrollTop}
              className={navLinkClass}
            >
              Register
            </NavLink>
          </div>

          {/* Mobile right side */}
          <div className="flex items-center gap-2 sm:hidden">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700"
            >
              <Heart size={16} />
              Register
            </Link>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden transition-all duration-300 sm:hidden ${
            open ? "max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-2 rounded-2xl border border-red-100 bg-white p-3 shadow-lg">
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={navLinkClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/donor"
              onClick={() => setOpen(false)}
              className={navLinkClass}
            >
              Donors
            </NavLink>

            <NavLink
              to="/register"
              onClick={() => setOpen(false)}
              className={navLinkClass}
            >
              Register
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
