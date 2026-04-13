import Card from './Card';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";

function ItemListContainer() {
  

  const { categoria } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {

    const traerProductos = async () => {

      const productosRef = collection(db, "productos");

      const q = categoria
        ? query(productosRef, where("category", "==", categoria))
        : productosRef;

      const res = await getDocs(q);

      const data = res.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setProductos(data);
    };

    traerProductos();

  }, [categoria]);

  return (

    // contenedor de la lista de productos con título y mapeo de cada producto a un componente Card
    
    <section>
      <h1>Tu tienda de gorras y accesorios de moda</h1>

      <div className="item-list">
        {productos.map(product => (
          <Card key={product.id}
                product={product}
                setProductos={setProductos} />
        ))}
      </div>
    </section>
  );
}

export default ItemListContainer;