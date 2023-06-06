import React from "react";

//import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../slider.css';

//import required modules
import { Pagination , Navigation} from 'swiper';

//components
import Product from "../components/Product";

const ProductSlider = ({ data }) => {
  

  return (
   <Swiper modules={[Pagination , Navigation]} loop={false} navigation={true}
    breakpoints={
      {
        320: {
          slidesPerView : 1,
          spaceBetween: 30
        },
        720: {
          slidesPerView : 2,
          spaceBetween: 30
        },
        1024: {
          slidesPerView : 3,
          spaceBetween: 30
        },
        1440: {
          slidesPerView : 5,
          spaceBetween: 30
        },
      }
    }

    pagination = {{
      clickable: true,
    }}

    className="productSlider mx-auto max-w-[330px] md:max-w-[950px] xl:max-w-[1410px] transition-all"
   >
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
