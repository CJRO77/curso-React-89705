import { FaShoppingCart } from "react-icons/fa";

export default function Navbar({ cartCount }) {
  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
  <div className="container-fluid px-5">

       <a className="navbar-brand fw-bold fs-3" href="#">
       Hood & Diamond
      </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">

            <li className="nav-item">
              <a className="nav-link" href="#">Inicio</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Productos</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
            </li>

         <li className="nav-item ms-3">
  <div className="cart-container">

    <FaShoppingCart size={26} />

    <span className="cart-badge">
      {cartCount}
    </span>

  </div>
</li>

          </ul>
        </div>

      </div>
    </nav>
  );
}