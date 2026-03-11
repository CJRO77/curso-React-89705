import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import Navbar from "./components/Navbar";
import products from './data/products';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ProductModal from './components/ProductModal';


function App() {

  const [cartCount, setCartCount] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productos, setProductos] = useState(products);

  const handleAddToCart = (product, cantidad) => {

    setCartCount(prev => prev + cantidad);

    setProductos(productos.map(p =>
      p.id === product.id
        ? { ...p, stock: p.stock - cantidad }
        : p
    ));

  };

  return (
    <>
      <Navbar cartCount={cartCount} />

      <section>
        <h1>Tu tienda de gorras y accesorios de moda</h1>
        <p>Encuentra las mejores gorras y accesorios para tu estilo</p>

        <div className="item-list">
          {productos.map(product => (
            <Card
              key={product.id}
              product={product}
              title={product.title}
              price={product.price}
              image={product.image}
              stock={product.stock}
              onAdd={handleAddToCart}
              onOpen={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      </section>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAdd={handleAddToCart}
        />
      )}

      <Footer />
    </>
  );
}

export default App;
