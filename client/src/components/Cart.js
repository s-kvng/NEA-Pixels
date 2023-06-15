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
      <div>
        {/* close icon */}
        <div
          onClick={() => setIsOpen(false)}
          className="text-3xl flex justify-end"
        >
          <FiX className="cursor-pointer" />
        </div>
        <div>
            {cart.map((item)=>(
                <CartItem item={item} key={item.id} />
            ))}
        </div>
      </div>
     
    </div>
  );
};

export default Cart;
