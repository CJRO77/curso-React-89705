import './Card.css'
import { useState } from "react";
import Counter from "./Counter";

function Card({ title, price, image, stock, onAdd }) {

  const [cantidad, setCantidad] = useState(1);
  
 const handleAdd = () => {
  onAdd(cantidad);
};

  return (
    <div className="card-item">

      <img src={image} className="card-image" alt={title} />

      <h2>{title}</h2>

      <p>Precio: ${price}</p>

      <Counter

        stock={stock}
        cantidad={cantidad}
        setCantidad={setCantidad}
      />

     <button onClick={handleAdd}>
  Comprar
</button>

    </div>
  );
}

export default Card;