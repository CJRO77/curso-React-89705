import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";

export default function Navbar() {

  const { cartCount } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  return (
    
    // contenedor de la barra de navegación con enlaces y el carrito de compras

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid px-5">

        <span className="navbar-brand fw-bold fs-3">
          <img src="/imgs/logo.png" className="logo-img" />
          <span className="logo-text">Hood & Diamond</span>
        </span>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

      
        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>

          <ul className="navbar-nav ms-auto align-items-center">

            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setOpen(false)}>
                Inicio
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/productos/beisbol" onClick={() => setOpen(false)}>
                Beisbol
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/productos/automovilismo" onClick={() => setOpen(false)}>
                Automovilismo
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/productos/baloncesto" onClick={() => setOpen(false)}>
                Baloncesto
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contacto" onClick={() => setOpen(false)}>
                Contacto
              </Link>
            </li>

            <li className="nav-item ms-3">
              <Link to="/cart" className="cart-container" onClick={() => setOpen(false)} title="Carrito">

                <FaShoppingCart size={26} />

                {cartCount > 0 && (
                  <span className="cart-badge">
                    {cartCount}
                  </span>
                )}

              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}