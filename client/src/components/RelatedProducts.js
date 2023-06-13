import React, { useState } from "react";

//hooks
import useFetch from "../hooks/useFetch";

//components
import ProductSlider from "./ProductSlider";

const RelatedProducts = ({ categoriesTitle , id }) => {

  const [lessProducts , setLessProducts] = useState([]);

  const { data, isLoading, error } = useFetch(
    `products?populate=*&filters[categories][title]=${categoriesTitle}`
  );
  
  // data.forEach(product => {
    
  //   if(product.id == id ){
  //     continue;
  //   }
  // });



  return (
    <div className="mb-10">
        <div className="">
          <h2 className="text-center h2 mb-6 lg:text-left">Related Products</h2>

          {isLoading || error ? (
        <span>Loading...</span>
      ) : (
        <ProductSlider data={data} />
      )}
        </div>
    </div>
  );
};

export default RelatedProducts;
