
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
        <div className="flex items-center justify-between sm:h-20 h-16">
          {/* Left logo */}
          <Link
            to="/"
            className="flex min-w-0 flex-1 items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <img
              src="/images/star-mosco-icon.png"
              alt="Star Moscow Blood Donors logo"
              className="h-32 shrink-0 rounded-xl object-contain"
            />

            <div className="min-w-0">
              <p className="truncate text-xs font-extrabold tracking-wide text-slate-900 sm:text-base">
                STAR MOSCOW BLOOD DONORS
              </p>
              <p className="truncate pl-5 text-xs font-medium text-red-600 sm:text-sm">
                Connected by Blood
              </p>
            </div>
          </Link>

          {/* Right side */}
          <div className="flex items-center gap-0 sm:gap-0 shrink-0">
            <img
              src="/images/mosco-blood.png"
              alt="blood logo"
            className="h-12 sm:h-18 shrink-0 rounded-xl object-contain"
            />

            {/* Desktop nav */}
            <div className="hidden sm:flex items-center gap-2">
              <NavLink
                to="/"
                onClick={handleScrollTop}
                className={navLinkClass}
              >
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

              <NavLink
                to="/contact"
                onClick={handleScrollTop}
                className={navLinkClass}
              >
                Contacts
              </NavLink>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="inline-flex h-10 w-10 sm:hidden items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
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

            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className={navLinkClass}
            >
              Contacts
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;