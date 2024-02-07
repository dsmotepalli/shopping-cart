import React, { useContext } from "react";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { Mycontext } from "../context";

function CartProducts({ singleproduct }) {
  const { cart, setCart } = useContext(Mycontext);

  function removeProductfromCart(singleproduct) {
    const updatedcart = cart.filter((pro) => !(pro.id === singleproduct.id));
    setCart(updatedcart);
  }
  function changeQty(id, qty) {
    const updatedCart = cart.filter((cartpro, i) =>
      cartpro.id === singleproduct.id ? (cartpro.qty = qty) : cartpro.qty
    );
    setCart(updatedCart);
  }
  return (
    <div className="w-[100%] border-2 h-[150px] flex  items-center justify-around">
      <img
        src={singleproduct.thumbnail}
        alt=""
        className="w-[100px] h-[80px]"
      />
      <div>
        <div>{singleproduct.title}</div>
        <div>Price ${singleproduct.price}</div>

        <div className="flex gap-2">
          <button
            onClick={() => changeQty(singleproduct.id, singleproduct.qty - 1)}
          >
            <FaMinus
              className="hover:text-white hover:bg-black rounded-lg"
              size={19}
            />
          </button>
          <div>{singleproduct.qty}</div>
          <button
            onClick={() => changeQty(singleproduct.id, singleproduct.qty + 1)}
          >
            <FaPlus
              className="hover:text-white hover:bg-black rounded-lg"
              size={19}
            />
          </button>
        </div>
      </div>
      <button
        onClick={() => {
          removeProductfromCart(singleproduct);
        }}
      >
        <FaTrashAlt size={20} className="hover:text-red-500" />
      </button>
    </div>
  );
}

export default CartProducts;
