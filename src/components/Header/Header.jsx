
import { useState } from "react";
import {
  Menu,
  X,
  Search,
  ChevronDown,
  Rss,

} from "lucide-react";

import "./Header.css";

const learningLinks = [
  { label: "Performance Solutions", href: "/performance-solutions" },
  { label: "Courseware Development", href: "/courseware-development" },
  {
    label: "Assistance and Training Management",
    href: "/assistance-training-management",
  },
];

const aboutLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Company Leadership", href: "/leadership" },
  { label: "Our Experience", href: "/experience" },
];

function NavDropdown({ label, links, mobileOpen, closeMenu }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`nav-dropdown ${expanded ? "dropdown-expanded" : ""}`}>
      <button
        className="nav-link dropdown-trigger"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        {label}
        <ChevronDown />
      </button>

      <div className="dropdown-menu">
        {links.map((item) => (
          <a key={item.label} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="site-header">
      <div className="header-top-line" />

      <div className="header-topbar">
        <div className="header-topbar-inner">
          <p>
            Accelerating your performance through cutting edge learning
          </p>

          <div className="header-socials">
            <a href="#" aria-label="RSS"><Rss /></a>

          </div>
        </div>
      </div>

      <div className="header-main">
        <a href="/" className="header-logo" onClick={closeMenu}>
          <img src="/assets/cti-logo.png" alt="CTI" />
        </a>

        <nav className={`desktop-nav ${mobileOpen ? "nav-open" : ""}`}>
          <a href="/" className="nav-link" onClick={closeMenu}>
            Home
          </a>

          <NavDropdown
            label="Learning Solutions"
            links={learningLinks}
            closeMenu={closeMenu}
          />

          <NavDropdown
            label="About Us"
            links={aboutLinks}
            closeMenu={closeMenu}
          />

          <a href="/careers" className="nav-link" onClick={closeMenu}>
            Careers at CTI
          </a>

          <button className="search-button" aria-label="Search">
            <Search />
          </button>
        </nav>

        <button
          className="mobile-menu-button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

export default Header;
