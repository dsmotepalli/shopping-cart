import React, { useContext } from "react";
import { Mycontext } from "../context";
import CartProducts from "./CartProducts";

function Cart() {
  const { cart } = useContext(Mycontext);

  return (
    <div className="w-[20%] h-dvh overflow-y-scroll ">
      <div className="font-bold text-lg">Cart</div>
      <div className="font-semibold">
        Cart Total $
        {cart.reduce((acc, currVal) => acc + currVal.price * currVal.qty, 0)}
      </div>
      <div className="">
        {cart.map((product, i) => (
          <CartProducts key={i} singleproduct={product} />
        ))}
      </div>
    </div>
  );
}

export default Cart;
