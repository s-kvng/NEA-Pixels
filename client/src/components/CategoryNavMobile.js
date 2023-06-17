import React from 'react';

//icons
import { FiX } from 'react-icons/fi';

//Links
import { Link } from 'react-router-dom';

//useFetch
import useFetch from '../hooks/useFetch';

const CategoryNavMobile = ({ setCatNavMobile }) => {

  //fetch category data
  const { data } = useFetch('/categories');

  return <div className="bg-primary w-full h-full z-30 p-8" >
    
    {/* close icon */}
    <div onClick={()=> setCatNavMobile(false) } className="text-3xl flex justify-end">
      <FiX className='cursor-pointer' />
    </div>

    <div className=" flex flex-col gap-y-12 p-2">
      {data?.map((category)=>(
         <Link to={`/products/${category.id}`} className="cursor-pointer uppercase " key={category.id}>
         {category.attributes.title} Cameras
       </Link>
      ))}
    </div>

    </div>;
};

export default CategoryNavMobile;
