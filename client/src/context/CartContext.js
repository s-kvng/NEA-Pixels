import React, { createContext, useEffect, useState } from 'react';

//create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [isOpen , setIsOpen] = useState(false);
  const [cart , setCart] = useState([]);
  const [ itemsAmount , setItemsAmount] = useState(0);
  const [amount , setAmount] = useState(0);
  const [ total , setTotal ] = useState(0);


  //check and update cart amount(badge)
  useEffect(()=>{

    //total amount by accumulating the amount property of each item.
      const amount = cart.reduce((a,c)=>{
        return a + c.amount;
      }, 0)//The initial value of the accumulator (a) is set to 0.

      setItemsAmount(amount);

  }, [cart])


  //
  useEffect(()=>{

    const total = cart.reduce((a, c)=>{
      return a + c.attributes.price * c.amount;
    }, 0)

    setTotal(total);
  },[cart])


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


//handle input for cart
  const handleInput = (e, id) =>{
    const value = parseInt(e.target.value);
    
    //
    const singleItem = cart.find((item)=>{
      return item.id === id;
    })

    
   if(singleItem){

    const newCart = cart.map((item)=>{

      if(item.id === id ){
        if(isNaN(value)){
          setAmount(1)
          return { ...item , amount : 1 }
        }
        else{
          setAmount(value)
          return { ...item , amount : value };
        }
      }
      else{
        return item;
      }
    });
    setCart(newCart);
   }

   setIsOpen(true); 

  }


  //handle select
  const handleSelect = (e , id) =>{
    const value = parseInt(e.target.value)
    const cartItem = cart.find((item)=>{
      return item.id === id;
    })

   if(cartItem){

    const newCart = cart.map((item)=>{
      if(item.id === id){
        if(isNaN(value)){
          setAmount(1)
          return { ...item , amount : 1 };
        }
        else{
          setAmount(value)
          return { ...item , amount : value };
        }
      }
      else{
        return item;
      }
    })

    setCart(newCart);
   }
   
   setIsOpen(true)

  }



  return (

    <CartContext.Provider value={{ isOpen , setIsOpen , addToCart, cart , removeFromCart, itemsAmount, handleInput , handleSelect, total}}>
        { children }
    </CartContext.Provider>
  );
};

export default CartProvider;
