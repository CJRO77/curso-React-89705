import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";




export default function Footer() {
  return (

    // contenedor del footer con íconos de redes sociales y medios de pago

    <footer className="footer">
      <div className="container">
        <p>© 2026 Hood & Diamond</p>

        <div className="social-icons">
          <FaFacebook />
          <FaInstagram />
          <FaXTwitter />
        </div>

        <div className="footer-payments">
          <img 
            src="/imgs/pagos.png"
            alt="Medios de pago y envíos"
          />
        </div>

      </div>
    </footer>
  );
}

