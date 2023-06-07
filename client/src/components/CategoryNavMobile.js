import React from 'react';

//icons
import { FiX } from 'react-icons/fi';


const CategoryNavMobile = ({ setCatNavMobile }) => {
  return <div className="bg-primary w-full h-full z-30 p-8" >
    
    {/* close icon */}
    <div onClick={()=> setCatNavMobile(false) } className="text-3xl flex justify-end">
      <FiX className='cursor-pointer' />
    </div>

    CategoryNavMobileee</div>;
};

export default CategoryNavMobile;
