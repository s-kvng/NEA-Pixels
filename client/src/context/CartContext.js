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
    //parse the id from a string to an int
    const itemId = parseInt(id);

    //destructure the item[0] object to add the amount attribute
    const newItem = { ...item[0] , amount : 1 };

    //retrieve the old cart items and add the new item . ie :"...cart"(spread operator)
    setCart([...cart, newItem])

    //check if item is already in the cart and return it
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
    

    setIsOpen(true)
  }


  const removeFromCart = (id) =>{

    const newCart = cart.filter((item)=>{
      return item.id !== id ;
    })

    setCart(newCart);
  }



  return (

    <CartContext.Provider value={{ isOpen , setIsOpen , addToCart, cart , removeFromCart}}>
        { children }
    </CartContext.Provider>
  );
};

export default CartProvider;
