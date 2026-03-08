

export default function Counter({ stock, cantidad, setCantidad }) {



  const sumar = () => {
    if (cantidad < stock) {
      
      setCantidad(cantidad + 1);
      
    }
  };

  const restar = () => {
    if (cantidad > 1) {
      
      setCantidad(cantidad - 1);
      
    }
  };

  return (
    <div>
      <button onClick={restar} disabled={cantidad === 1}>-</button>

      <span style={{ margin: "0 10px" }}>{cantidad}</span>

      <button onClick={sumar} disabled={cantidad === stock}>+</button>

      <p style={{ color: "black" }}>
        Stock disponible: {stock}
      </p>
    </div>
  );

}