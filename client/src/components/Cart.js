import React, { useContext } from "react";

//icon
import { FiX } from "react-icons/fi";

//
import { CartContext } from "../context/CartContext";

//
import CartItem from './CartItem';

const Cart = ({ setIsOpen }) => {
  const { cart } = useContext(CartContext);

  return (
    <div className="">
      <div className=""> 
        {/* close icon */}
        <div
          onClick={() => setIsOpen(false)}
          className="text-3xl flex justify-end pb-5 pt-2"
        >
          <FiX className="cursor-pointer" />
        </div>
        <div className="flex flex-col px-2 gap-y-10"> 
            {cart.map((item)=>(
                <CartItem item={item} key={item.id} />
            ))}
        </div>
      </div>
     
    </div>
  );
};

export default Cart;
