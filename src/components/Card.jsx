import './Card.css'
import { useState } from "react";
import Counter from "./Counter";

function Card({ product, title, price, image, stock, onAdd, onOpen }) {

  const [cantidad, setCantidad] = useState(1);
  
  const handleAdd = (e) => {
    e.stopPropagation(); 
    console.log(`Comprar: ${title} x${cantidad}`);
    if (onAdd) onAdd(product, cantidad);
  };

const handleImageClick = () => {
  console.log("CLICK EN CARD");
  console.log("onOpen:", onOpen);

  if (onOpen) {
    onOpen(product);
  }
};


  return (
   <div className="card-item" style={{cursor:'pointer'}}>

      <img  src={image} 
        className="img-fluid modal-img" 
        alt={title} 
        onClick={handleImageClick} />

      <h2>{title}</h2>

      <p>Precio: ${price}</p>

      <Counter

        stock={stock}
        cantidad={cantidad}
        setCantidad={setCantidad}
      />

     <button onClick={handleAdd}> Comprar </button>

    </div>
  );
}

export default Card;