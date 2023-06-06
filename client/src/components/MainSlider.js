import React from "react";

//import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper css
import "swiper/css";
import "swiper/css/pagination";
import "../slider.css";

//import required module
import { Pagination } from "swiper";

//img
import CameraImg from "../img/camera.png";

//data
const sliderData = [
  {
    img: CameraImg,
    pretitle: "Special Offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "first order",
    btnText: "shop now",
  },

  {
    img: CameraImg,
    pretitle: "Special Offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "first order",
    btnText: "shop now",
  },

  {
    img: CameraImg,
    pretitle: "Special Offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "first order",
    btnText: "shop now",
  },

  {
    img: CameraImg,
    pretitle: "Special Offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "first order",
    btnText: "shop now",
  },
];

const MainSlider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      loop={true}
      pagination={{ clickable: true }}
      className="mainSlider bg-primary h-full lg:bg-mainSlider 
        lg:bg-no-repeat max-w-lg lg-max-w-none rounded-[8px] overflow-hidden drop-shadow-2xl relative"
    >
      <>
        {sliderData.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className=" h-full flex-col lg:flex-row p-[10px] md:p-[50px]">
                {/* text */}
                <div className="w-full lg:flex-1">
                  <div className="mb-2 uppercase text-center lg:text-left">{slide.pretitle}</div>
                  <div
                    className="text-3xl md:text-[46px] font-semibold text-center 
                  leadin-none lg:text-left lg:mb-8"
                  >
                    <div>{slide.titlePart1}</div>
                    <div>{slide.titlePart2}</div>
                    <div>{slide.titlePart3}</div>
                  </div>

                  <button className="btn btn-accent uppercase mx-auto lg:mx-0">Shop now</button>
                </div>


                {/* img */}
                <div className="flex-1 bg-blue-400">
                  <img
                    className="lg:absolute lg:-right-16 lg:bottom-1"
                    src={slide.img}
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </>
    </Swiper>
  );
};

export default MainSlider;
