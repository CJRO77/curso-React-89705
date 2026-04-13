import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";

function ItemDetail() {

  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const [producto, setProducto] = useState(null);

  useEffect(() => {

    const traerProducto = async () => {
      try {

        const docRef = doc(db, "productos", id);
        const res = await getDoc(docRef);


        if (res.exists()) {
          setProducto({ id: res.id, ...res.data() });
        }
      } catch (error) {
        console.log(error);
      }
    };

    traerProducto();

  }, [id]);

  if (!producto) {

  return (

    // contenedor de carga mientras se obtiene el producto desde Firebase

    <div className="text-center mt-5">
      <h3>Cargando producto...</h3>
    </div>
  );
}

  return (

    // contenedor del detalle del producto y botones de compra y volver atrás

    <div className="container mt-4 text-center">

      <h2>{producto.title}</h2>

      <img
    src={producto.image}
    alt={producto.title}
    style={{
    width: "100%",
    maxWidth: "400px",
    height: "300px",
    objectFit: "cover",
    borderRadius: "10px"
  }}
  />

      <p>{producto.description}</p>

      <h4>${producto.price?.toLocaleString()}</h4>

      <p style={{ fontWeight: "bold" }}>
        Stock disponible: {producto.stock}
      </p>

    <div className="d-flex flex-column align-items-center
     gap-2 mt-3">

  <button
    className="btn btn-primary w-50"
    style={{ maxWidth: "250px" }}
    onClick={() => addToCart(producto, 1)}
    disabled={producto.stock === 0}
  >
    {producto.stock === 0 ? "⚠️ Sin stock" : "Comprar"}
  </button>

  <button
    className="btn btn-outline-secondary w-50"
    style={{ maxWidth: "250px" }}
    onClick={() => navigate(-1)}
  >
    Volver
  </button>

</div>
    </div>
    );
}

export default ItemDetail;