import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Projects", to: "/projects" },
  { name: "Achievements", to: "/achievements" },
  { name: "Contact", to: "/contact" },
];

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-md px-4 py-3"
      style={{
        background: "linear-gradient(to right, #1e1e1e, #121212)",
      }}
    >
      <div className="d-flex w-100 align-items-center justify-content-between">
        {/* Brand */}
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

        {/* Nav links */}
        <ul className="navbar-nav flex-row gap-3 me-auto ms-4">
          {navLinks.map((link) => (
            <li className="nav-item" key={link.name}>
              <Link
                className="nav-link px-2 text-secondary"
                to={link.to}
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
          href="/resume.pdf"
          className="btn fw-semibold px-3 py-1"
          style={{
            background: "linear-gradient(90deg, #00c6ff, #4a00e0)",
            border: "none",
            borderRadius: "20px",
            color: "white",
          }}
        >
          Resume
        </a>
      </div>
    </nav>
  );
}