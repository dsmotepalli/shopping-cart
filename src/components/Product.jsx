import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Mycontext } from "../context";

function Product({ singleproduct }) {
  const { cart, setCart } = useContext(Mycontext);

  const [availableInCart, setavailableInCart] = useState(false);
  useEffect(() => {
    const availableInCart = cart.some(
      (cartpro) => cartpro.id === singleproduct.id
    );
    setavailableInCart(availableInCart);
  }, [cart]);

  function AddProductToCart(product) {
    setCart((p) => [...p, { ...product, qty: 1 }]);

    setavailableInCart(true);
  }
  function removeProductfromCart(product) {
    const updateCart = cart.filter((cartpro) => !(cartpro.id === product.id));
    setCart(updateCart);
    setavailableInCart(false);
  }

  return (
    <div className="w-[250px] h-[350px] border-2 flex justify-center items-center flex-col">
      <div>
        <img
          src={singleproduct.thumbnail}
          alt=""
          className="w-[100%] h-[200px]"
        />
      </div>
      <div className="font-bold">{singleproduct.title}</div>
      <div className="font-semibold">Price ${singleproduct.price}</div>
      <div className="font-light text-sm">Rating {singleproduct.rating}</div>
      <div className="text-sm">{singleproduct.description.slice(0, 30)}...</div>
      {availableInCart ? (
        <button
          className="border-2 rounded-lg border-black bg-red-500 text-white p-2"
          onClick={() => {
            removeProductfromCart(singleproduct);
          }}
        >
          Remove from cart
        </button>
      ) : (
        <button
          className="border-2 rounded-lg border-black bg-black text-white p-2"
          onClick={() => {
            AddProductToCart(singleproduct);
          }}
        >
          Add to cart
        </button>
      )}
    </div>
  );
}

export default Product;
