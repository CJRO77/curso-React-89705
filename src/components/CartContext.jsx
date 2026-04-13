import { createContext, useState, useEffect } from "react"


export const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("carrito");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, cantidad) => {
    setCart(prev => {
      const existe = prev.find(p => p.id === product.id);

      if (existe) {
        return prev.map(p =>
          p.id === product.id
            ? { ...p, cantidad: p.cantidad + cantidad }
            : p
        );
      } else {
        return [...prev, { ...product, cantidad }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(p => p.id !== id));
  };

  const increase = (id) => {
    setCart(prev =>
      prev.map(p =>
        p.id === id
          ? { ...p, cantidad: p.cantidad + 1 }
          : p
      )
    );
  };

  const decrease = (id) => {
    setCart(prev =>
      prev
        .map(p =>
          p.id === id
            ? { ...p, cantidad: p.cantidad - 1 }
            : p
        )
        .filter(p => p.cantidad > 0)
    );
  };

  const cartCount = cart.reduce((acc, p) => acc + p.cantidad, 0);

  return (

    
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      increase,
      decrease,
      cartCount
    }}>
      {children}
    </CartContext.Provider>
  );
}

