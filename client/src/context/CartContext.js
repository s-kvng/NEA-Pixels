import React, { createContext, useState } from 'react';

//create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [isOpen , setIsOpen] = useState(false);
  const [cart , setCart] = useState([]);
  const [ itemsAmount , setItemsAmount] = useState(0);
  const [amount , setAmount] = useState(0);
  const [ total , setTotal ] = useState(0);



  //add to cart
  const addToCart = (item ,id) =>{
    const itemId = parseInt(id);
    const newItem = { ...item[0] , amount : 1 };
    setCart([...cart, newItem])

    //
    const cartItem = cart.find((item)=>{
      return item.id === itemId;
    })

    if(cartItem){
      const newCart = cart.map((item)=>{
        if(item.id === itemId){
          setAmount(cartItem.amount + 1);
          return { ...item , amount : cartItem.amount + 1}
        }
        else{
          return item;
        }
      });
      setCart(newCart);  
    }
    else{
      setCart([...cart , newItem])
    }

    setIsOpen(true)
  }

  
  console.log(cart)



  return (

    <CartContext.Provider value={{ isOpen , setIsOpen , addToCart}}>
        { children }
    </CartContext.Provider>
  );
};

export default CartProvider;
