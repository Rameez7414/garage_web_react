import { Link, NavLink } from "react-router-dom"
import { useState } from "react"




function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="bg-black/70 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* LOGO */}
          <Link
            to="/"
            className="text-white text-xl font-bold tracking-wide"
          >
            Amin Auto Garage
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-6">
            {["/", "/services", "/about", "/contact"].map((path, i) => {
              const names = ["Home", "Services", "About", "Contact"]
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition ${
                      isActive
                        ? "text-red-500"
                        : "text-gray-200 hover:text-white"
                    }`
                  }
                >
                  {names[i]}
                </NavLink>
              )
            })}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-black/90 border-t border-white/10">
            <div className="flex flex-col px-6 py-4 gap-4">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-sm font-medium transition ${
                      isActive
                        ? "text-red-500"
                        : "text-gray-200 hover:text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
