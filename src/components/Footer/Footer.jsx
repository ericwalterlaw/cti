
import {
  Phone,
  LockKeyhole,
  Newspaper,
  Rss,

} from "lucide-react";

import "./Footer.css";

const footerLinks = [
  {
    label: "Contact",
    href: "/contact",
    icon: Phone,
  },
  {
    label: "Privacy",
    href: "#",
    icon: LockKeyhole,
  },
  {
    label: "News",
    href: "#",
    icon: Newspaper,
  },
];

function Footer() {
  return (
    <footer className="site-footer">

      {/* Main footer links */}
      <div className="footer-main">

        <div className="footer-links">
          {footerLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                href={item.href}
                className="footer-link"
                key={item.label}
              >
                <Icon className="footer-link-icon" />

                <span>{item.label}</span>
              </a>
            );
          })}
        </div>

      </div>

      {/* Bottom information bar */}
      <div className="footer-bottom">

        <div className="footer-contact-info">

          <p className="footer-address">
            9198 Crestwyn Hills Drive | Memphis, TN, 38125
          </p>

          <p className="footer-phone">
            Phone: <a href="tel:9017548839">901.754.8839</a>
            <span className="footer-separator"> | </span>
            Fax: 901.751.0836
          </p>

        </div>

        <div className="footer-socials">
          <a href="#" aria-label="RSS">
            <Rss />
          </a>


        </div>

      </div>

    </footer>
  );
}

export default Footer;
