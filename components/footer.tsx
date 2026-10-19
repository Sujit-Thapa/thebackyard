import { FaFacebookF, FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { GiCampCookingPot } from "react-icons/gi";

const socials = [
  { Icon: FaInstagram, label: "Instagram", href: "#" },
  { Icon: FaFacebookF, label: "Facebook", href: "#" },
  { Icon: FaTiktok, label: "TikTok", href: "#" },
  { Icon: FaXTwitter, label: "X", href: "#" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <a href="#top" className="brand">
            <span className="brand-mark" aria-hidden="true">
              <GiCampCookingPot />
            </span>
            The Backyard
          </a>
          <nav className="footer-links" aria-label="Footer">
            <a href="#menu">Menu</a>
            <a href="#experience">Experience</a>
            <a href="#specials">Specials</a>
            <a href="#reserve">Reserve</a>
          </nav>
          <div className="socials">
            {socials.map(({ Icon, label, href }) => (
              <a key={label} href={href} aria-label={label}>
                <Icon />
              </a>
            ))}
          </div>
        </div>
        <p className="copyright">© {new Date().getFullYear()} The Backyard Kitchen &amp; Bar</p>
      </div>
    </footer>
  );
}
