import React, { useContext } from "react";
import { Mycontext } from "../context";
import CartProducts from "./CartProducts";

function Cart() {
  const { cart } = useContext(Mycontext);

  return (
    <div className="w-[60%] h-dvh overflow-y-scroll md:w-[40%] ">
      <div className="flex gap-4 justify-around items-center">
        <div className="font-bold text-lg">Cart</div>

        <div className="font-semibold">
          Cart Total $
          {cart.reduce((acc, currVal) => acc + currVal.price * currVal.qty, 0)}
        </div>
        <div className="bg-sky-300">
          Made by{" "}
          <a
            href="https://github.com/dsmotepalli"
            target="_blank"
            className="underline"
          >
            Deepak
          </a>
        </div>
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
