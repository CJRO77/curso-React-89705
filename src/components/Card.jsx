import './Card.css'
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";


function Card({ product, setProductos }) {

  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

 const handleAdd = (e) => {
  e.stopPropagation();

  addToCart(product, 1);

  setProductos(prev =>
    prev.map(p =>
      p.id === product.id
        ? { ...p, stock: p.stock - 1 }
        : p
    )
  );
};

  return (
    
    //contenedor de cada producto en la lista de productos

    <div className="card-item">

      <img  
        src={product.image}
        className="card-image"
        alt={product.title}
        onClick={() => navigate(`/producto/${product.id}`)}
        style={{ cursor: "pointer" }}
      />

      <h2 className="card-h2">{product.title}</h2>

      <p className="card-price">
        ${product.price?.toLocaleString()}
      </p>

      <p className="card-stock">
        Stock disponible: {product.stock}
      </p>

      <button 
        className="btn-ml"
        onClick={handleAdd} 
        disabled={product.stock === 0}
      >
        {product.stock === 0 ? "Sin stock" : "Comprar"}
      </button>

    </div>
  );
}

export default Card;