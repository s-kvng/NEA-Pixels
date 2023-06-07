import React from 'react';

//icon
import { FiX } from 'react-icons/fi';

const Cart = ({ setIsOpen }) => {
  return <div className="p-8">
    {/* close icon */}
    <div onClick={()=> setIsOpen(false)} className="text-3xl flex justify-end">
        <FiX />
    </div>
    Cart</div>;
};

export default Cart;
