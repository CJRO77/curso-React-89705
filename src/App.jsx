import './App.css'
import Footer from './components/Footer'
import Navbar from "./components/Navbar";
import { CartContext } from './components/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Routes, Route } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';
import Contacto from './components/Contacto';
import Cart from './components/Cart';



function App() {

  return (

    // contenedor principal con rutas para cada sección y componentes como Navbar y Footer
    <>
    
      <Navbar />

      <Routes>

       <Route path="/" element={
  <ItemListContainer />
} />

<Route path="/productos/:categoria" element={
  <ItemListContainer />
} />

        <Route path="/producto/:id" element={
          <ItemDetail />
        } />

        <Route path="/contacto" element={<Contacto />} />

        <Route path="/cart" element={<Cart />} />

      </Routes>

      <Footer />
    </>
  );
}


export default App;