import React from 'react';

//link
import { Link } from 'react-router-dom';

const CartItem = ({ item }) => {
  return (
    <div className='flex'>
      <Link className='h-[70px] w-[70px]'>
          <img src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}  
            alt=""/>
      </Link>
    </div>
  )
};

export default CartItem;
