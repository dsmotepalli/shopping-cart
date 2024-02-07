import { useState } from "react";
import { Mycontext } from "./context";

import Cart from "./components/Cart";
import ProductsListing from "./components/ProductsListing";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  
  return (
    <Mycontext.Provider
      value={{
        products,
        setProducts,
        cart,
        setCart,
  
      }}
    >
      <div className="flex">
        <ProductsListing />
        <Cart />
      </div>
    </Mycontext.Provider>
  );
}

export default App;
