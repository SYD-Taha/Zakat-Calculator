import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // Get current route
  const activeColor = "#00c6ff"; // Active link color
  const hoverColor = "#80e0ff"; // Lighter shade for hover

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Zakat Calculator</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                style={{
                  color: location.pathname === "/" ? activeColor : "white",
                }}
                onMouseEnter={(e) => (e.target.style.color = hoverColor)}
                onMouseLeave={(e) =>
                  (e.target.style.color =
                    location.pathname === "/" ? activeColor : "white")
                }
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                style={{
                  color: location.pathname === "/about" ? activeColor : "white",
                }}
                onMouseEnter={(e) => (e.target.style.color = hoverColor)}
                onMouseLeave={(e) =>
                  (e.target.style.color =
                    location.pathname === "/about" ? activeColor : "white")
                }
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
