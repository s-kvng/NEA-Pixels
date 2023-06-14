import React, { useContext } from "react";

// react hooks
import { useParams } from "react-router-dom";

//custom hooks
import useFetch from "../hooks/useFetch";

//components
import RelatedProducts from "../components/RelatedProducts";

//context API
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);

  const { id } = useParams();
 

  const { data, isLoading, error } = useFetch(
    `/products?populate=*&filters[id][$eq]=${id}`
  );

  if (!data) {
    return <div>Loading...</div>;
  }

  const categoriesTitle =
    data[0].attributes.categories.data[0].attributes.title;

  return (
    <div className=" mb-16 pt-16 lg:pt-[30px]">
      {isLoading || error ? (
        <div className="container mx-auto">
          <span>Loading....</span>
        </div>
      ) : (
        <div className="container mx-auto">
          {/* text */}
          <div className="flex flex-col lg:flex-row gap-[30px] mb-[60px]">
            <div className="flex-1 lg:max-w-[45%] h-[500px] grad rounded-lg flex justify-center items-center">
              <img
                src={`http://localhost:1337${data[0].attributes.image.data.attributes.url}`}
                alt=""
                className="w-full max-w-[65%]"
              />
            </div>

            <div className="flex-1 p-8 lg:p-12 bg-primary xl:p-20 flex flex-col justify-center  ">
              {/* categories title */}
              <div className="uppercase text-accent text-lg font-medium mb-2">
                {data[0].attributes.categories.data[0].attributes.title} cameras
              </div>

              {/* title */}
              <h2 className="h2 mb-4">{data[0].attributes.title}</h2>

              {/* description */}
              <p className="lg:mb-12 mb-10">{data[0].attributes.description}</p>

              {/* price & btn */}
              <div className="flex items-center gap-x-8">
                {/* price */}
                <div className="text-accent text-xl font-semibold ">
                  ${data[0].attributes.price}
                </div>
                <button onClick={()=> addToCart(data,id)} className="btn btn-accent">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          {/* related products */}
          <RelatedProducts categoriesTitle={categoriesTitle} id={id} />
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
