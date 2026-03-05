import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import Navbar from "./components/Navbar";
import products from './data/products';
import { useState } from 'react';


function App() {

   const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (cantidad) => {
    setCartCount(prev => prev + cantidad);
  };
  return (
    <>
    <Navbar cartCount={cartCount} />
      <section>
        <h1>Tu tienda de gorras y accesorios de moda</h1>
        <p>Encuentra las mejores gorras y accesorios para tu estilo</p>

        

        <div className="item-list">
        {products.map(product => (
  <Card
    key={product.id}
    title={product.title}
    price={product.price}
    description={product.description}
    image={product.image}
    category={product.category}
    stock={product.stock}
    onAdd={handleAddToCart}
  />
))}
        </div>
      </section>

      <Footer />
    </>
  )
}

export default App
