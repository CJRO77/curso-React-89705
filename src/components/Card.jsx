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

      <img src={image} className="card-img" />

      <h2>{title}</h2>

      <p>Precio: ${price}</p>

      <Counter

        stock={stock}
        onChange={setCantidad}
      />

     <button onClick={handleAdd}>
  Comprar
</button>

    </div>
  );
}

export default Card;