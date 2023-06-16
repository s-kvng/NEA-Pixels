import React, { useContext } from "react";

//icon
import { FiX } from "react-icons/fi";

//
import { CartContext } from "../context/CartContext";

//
import CartItem from "./CartItem";
import { IoArrowForward, IoCartOutline } from "react-icons/io5";

const Cart = ({ setIsOpen }) => {
  const { cart, total } = useContext(CartContext);

  return (
    <div className="h-full w-full">
      <div className=" ">
        {/* close icon */}
        <div
          onClick={() => setIsOpen(false)}
          className="text-3xl flex justify-end pb-5 pt-2"
        >
          <FiX className="cursor-pointer" />
        </div>
        <div className=" scroll-smooth flex flex-col px-2 gap-y-10 overflow-y-auto h-[70vh]">
          {cart.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>
      </div>
      {/* subtotal & total */}
      {cart.length >= 1 && (
        <div className=" flex flex-col px-5 py-3">
          {/* subtotal */}
          <div className=" flex justify-between text-lg">
            <div>Subtotal</div>
            <div>${parseFloat(total)}</div>
          </div>

          {/* total */}
          <div className=" flex justify-between text-xl">
            <div>Total</div>
            <div>${parseFloat(total)}</div>
          </div>
        </div>
      )}

      {/*  */}
      <div>
        <div>
          {cart.length >= 1 ? (
            <div className="flex justify-between gap-x-4 px-3">
              <button className="btn bg-blue-500 text-primary hover:bg-accent-hover ">
                Clear cart
              </button>
              <button className="btn btn-accent hover:bg-accent-hover text-primary flex-1 px-2 gap-x-2">
                Checkout
                <IoArrowForward className="text-xl"/>
              </button>
            </div>
          ) : (
            <div className=" h-full absolute  top-0 left-0 right-0 flex flex-col justify-center 
            items-center -z-10">
              <div>Your cart is empty</div>
              <IoCartOutline className="text-5xl"/>
            </div>

          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
