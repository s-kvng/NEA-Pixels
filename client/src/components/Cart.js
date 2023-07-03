import React, { useContext } from "react";

//icon
import { FiX } from "react-icons/fi";

//
import { CartContext } from "../context/CartContext";

//
import CartItem from "./CartItem";

//icons
import { IoArrowForward, IoCartOutline } from "react-icons/io5";


//stripe
import { loadStripe } from '@stripe/stripe-js';
import { request } from '../request';

const Cart = ({ setIsOpen }) => {
  const { cart, total, clearCart } = useContext(CartContext);

  const stripePromise = loadStripe(
    'pk_test_51NKChjB9f2qgWA8YgCojO1pjXIkI1eCqKiYkv3tyT1CtzqUE7YIwNi5eLZChdOGZOQjtOn93QPDdQ5EdF47MI7en00PgSdrlN5'
  );

  const handlePayment = async ()=> {
    try {
      const stripe = await stripePromise;
      const res = await request.post('/orders', {
        cart,
      });

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    }catch(error){
      console.log("test2->error")
      console.log(error)
    }
  }

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
              <button onClick={()=> clearCart()} className="btn bg-blue-500 text-primary hover:bg-accent-hover ">
                Clear cart
              </button>
              <button onClick={handlePayment} className="btn btn-accent hover:bg-accent-hover text-primary flex-1 px-2 gap-x-2">
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
