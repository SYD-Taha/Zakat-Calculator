import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./CSS/Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="business-inquiry">
        <h4>📨 Summon Me via Pixels</h4>
        <p><a href="mailto:visiondotstj@gmail.com">visiondotstj@gmail.com</a></p>
      </div>
      <div className="company-info">
        <h3>V.stj</h3>
      </div>
      <div className="social-links">
        <a href="https://github.com/SYD-Taha" target="_blank" rel="noopener noreferrer">
          <FaGithub size={28} />
        </a>
        <a href="https://www.linkedin.com/in/syed-taha-jameel-357911326" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={28} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;