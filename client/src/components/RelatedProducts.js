import React from "react";

//hooks
import useFetch from "../hooks/useFetch";

//components
import ProductSlider from "./ProductSlider";


const RelatedProducts = ({ categoriesTitle , id }) => {


  const { data, isLoading, error } = useFetch(
    `products?populate=*&filters[categories][title]=${categoriesTitle}`
  );
  
  if (!data) {
    return <div>Loading...</div>;
  }

  //filter data
  const filteredData = data.filter((item) => item.id !== parseInt(id) )


  return (
    <div className="mb-10">
        <div className="">
          <h2 className="text-center h2 mb-6 lg:text-left">Related Products</h2>

          {isLoading || error ? (
        <span>Loading...</span>
      ) : (
        <ProductSlider data={filteredData} />
      )}
        </div>
    </div>
  );
};

export default RelatedProducts;
