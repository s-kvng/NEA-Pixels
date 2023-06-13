import React from "react";

//hooks
import useFetch from "../hooks/useFetch";

//components
import ProductSlider from "./ProductSlider";

const RelatedProducts = ({ categoriesTitle }) => {
  const { data, isLoading, error } = useFetch(
    `products?populate=*&filters[categories][title]=${categoriesTitle}`
  );
  console.log(data);

  return (
    <div className="mb-10">
        <div className="">
          <h2>Related Products</h2>

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
