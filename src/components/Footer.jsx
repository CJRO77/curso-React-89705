import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© 2026 Hood & Diamond</p>

        <div className="social-icons">
          <FaFacebook />
          <FaInstagram />
          <FaXTwitter />
        </div>
      </div>
    </footer>
  );
}