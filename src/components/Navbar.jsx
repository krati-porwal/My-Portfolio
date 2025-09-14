import { Link, useLocation} from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import "./Style.scss";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Projects", to: "/projects" },
  { name: "Achievements", to: "/achievements" },
  { name: "Contact", to: "/contact" },
];

export default function Navbar() {
   const [open, setOpen] = useState(false);
   const location = useLocation();

  return (
    <>
    <nav
      className="navbar navbar-expand-md px-md-5 py-3"
      style={{
        background: "linear-gradient(to right, #1e1e1e, #121212)",
      }}
    >
      <div className="d-flex w-100 px-md-5 px-4 align-items-center justify-content-between">
        {/* Brand */}
        <Link to="/" style={{ textDecoration: "none" }}>
        <span
          className="navbar-brand fw-bold mb-0 h1"
          style={{
            background: "linear-gradient(90deg, #8e2de2, #4a00e0, #00c6ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "1.2rem",
          }}
        >
          Krati <span style={{ color: "#00c6ff" }}>Porwal</span>
        </span>
        </Link>
        {/* Nav links */}
        <ul className="navbar-nav flex-row gap-3 d-none d-md-flex me-auto ms-4">
          {navLinks.map((link) => (
            <li className="nav-item" key={link.name}>
              <Link
              
                to={link.to}
                // ⭐ CHANGED: added custom classes & active-link check
                className={`nav-link px-2 nav-link-custom ${
                  location.pathname === link.to ? "active-link" : ""
                }`}
                // ⭐ CHANGED: aria-current for accessibility
                aria-current={location.pathname === link.to ? "page" : undefined}
                style={{
                  transition: "color 0.3s",
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          href="/KratiPorwal(3).resume.pdf"
          className="btn fw-semibold d-none d-md-flex px-3 py-1"
          style={{
            background: "linear-gradient(90deg, #00c6ff, #4a00e0)",
            border: "none",
            borderRadius: "20px",
            color: "white",
          }}
        >
          Resume
        </a>

        <button
              className="btn d-md-none text-light"
              style={{ background: "none", border: "none" }}
              onClick={() => setOpen(true)}
            >
              <FaBars size={22} />
            </button>
    </div>
    </nav>
    {/* ======= Sidebar Overlay & Drawer ======= */}
      {/* Overlay */}
      <div
        className={`position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 ${
          open ? "d-block" : "d-none"
        }`}
        style={{ zIndex: 1040 }}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar Drawer */}
      <div
        className="position-fixed top-0 start-0 h-100 bg-dark text-white p-4"
        style={{
          width: "250px",
          transform: open ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease",
          zIndex: 1041,
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="mb-0">Menu</h5>
          <button
            className="btn text-white"
            style={{ background: "none", border: "none" }}
            onClick={() => setOpen(false)}
          >
            <FaTimes size={22} />
          </button>
        </div>

        <ul className="nav flex-column gap-3">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                // ⭐ CHANGED: same active-link check inside sidebar
                className={`nav-link nav-link-custom ${
                  location.pathname === link.to ? "active-link" : ""
                }`}
                aria-current={location.pathname === link.to ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="mt-3">
            <a
              href="/KratiPorwal(3).resume.pdf"
              className="btn fw-semibold w-100"
              style={{
                background: "linear-gradient(90deg,#00c6ff,#4a00e0)",
                border: "none",
                borderRadius: "20px",
                color: "white",
              }}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
      </>
  );
}