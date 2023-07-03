import React, { useEffect, useState } from "react";

//useParams hook
import { useParams } from "react-router-dom";

//useFetch hook
import useFetch from "../hooks/useFetch";

//components
import CategoryNav from "../components/CategoryNav";
import Product from "../components/Product";

const Products = () => {
  //get url parameter (id)
  const { id } = useParams();

  const [ title , setTitle ] = useState('')

  //fetch category data with that id
  const { data } = useFetch(`products?populate=*&filters[categories]=${id}`);


  //set title when data is fetch
  useEffect(()=>{
    if(data){
      setTitle(data[0].attributes.categories.data[0].attributes.title)
    }
  },[data]);

  return (
    <div className="mb-16 pt-16 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex gap-x-[20px]">
          {/* category nav */}
          <div className="">
            <CategoryNav />
          </div>

          <div>

              {/* title */}
              <div className=" text-xl uppercase py-5 text-center lg:text-left">
                {title} cameras
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] ">
                  {data?.map((product)=>(
                      <Product product={product} key={product.id} />
                  ))}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
