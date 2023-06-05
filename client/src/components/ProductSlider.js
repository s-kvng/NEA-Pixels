import React from "react";

//import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper style
import "swiper/css";
import "swiper/css/pagination";

//components
import Product from "../components/Product";

const ProductSlider = ({ data }) => {
  

  return (
   <Swiper>
    <>
      {data?.map((product)=>{
        return (
          <SwiperSlide key={product.id}>
              <Product product={product}/>
          </SwiperSlide>
        )
      })}
    </>
   </Swiper>

  );
};

export default ProductSlider;
