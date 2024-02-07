import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Mycontext } from "../context";
import Product from "./Product";

function ProductsListing() {
  const { products, setProducts } = useContext(Mycontext);

  async function fetchProducts() {
    const { data } = await axios.get("https://dummyjson.com/products");

    setProducts(data.products);
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="h-screen w-[80%] overflow-y-auto grid grid-cols-2 gap-3 pl-2 md:grid-cols-4">
      {products.map((product, i) => (
        <Product key={i} singleproduct={product} />
      ))}
    </div>
  );
}

export default ProductsListing;
