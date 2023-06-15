import React from 'react';

//link
import { Link } from 'react-router-dom';

//icons
import { IoClose } from 'react-icons/io5';

//components
import Qty from './Qty';

const CartItem = ({ item }) => {
  return (
    <div className='flex gap-x-8'>
      <Link to={`product/${item.id}`} className='h-[70px] w-[70px]'>
          <img src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}  
            alt=""/>
      </Link>
      <div className="flex-1">
        {/*  */}
        <div className="flex gap-x-8  mb-2">
          <Link to={`product/${item.id}`}>{item.attributes.title}</Link>
          <div className=" hover:text-accent cursor-pointer text-[24px]">
            <IoClose />
          </div>
        </div>
        <div className='flex items-center gap-x-12'>

          {/* quantity */}
        <div className="flex gap-x-5">
         <div>
         <Qty item={item}/>
         </div>
         <div>$ {item.attributes.price * item.amount}</div>
        </div>
       

        </div>
         {/* price */}
         <div>
          <span className=" text-accent">$ {item.attributes.price} per item</span>
        </div>

      </div>
    </div>
  )
};

export default CartItem;
