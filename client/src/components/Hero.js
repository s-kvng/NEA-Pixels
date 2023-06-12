import React from "react";

//import component
import MainSlider from "../components/MainSlider";
import CategoryNav from "../components/CategoryNav";

//import images
import promo_img1 from "../img/promo_img1.png";
import promo_img2 from "../img/promo_img2.png";

const Hero = () => {
  return (
    <section className="mb-10">
      <div className="container mx-auto">
        <div className=" flex flex-col gap-y-[30px] lg:flex-row lg:gap-x-[30px]  xl:flex-row xl:gap-x-[30px]">
          <div>
            {/* sidebar */}
            <CategoryNav />
          </div>

          {/* Main slider */}
          <div className="w-full max-w-lg lg:max-w-[364px] mx-auto">
            <MainSlider />
          </div>

          {/* Promo imgs */}
          <div className="flex flex-col gap-y-[30px] w-full max-w-lg 
            mx-auto h-[500px]">
            {/* promo 1 */}
            <div className="grad flex-1 h-[250px] rounded-[8px] 
            overflow-hidden relative p-6 ">

              {/* text */}
              <div className="flex flex-col max-w-[250px] lg:max-w-[160px] h-full justify-center">
                <div className="text-[20px] uppercase font-meduim leading-tight mb-4">Save 35% all disr cameras</div>
                  <a href="#" className="uppercase text-accent">
                    shop now
                  </a>
              </div>

              {/* img */}
              <img className="absolute z-20 -top-2 -right-4" src={promo_img1}  alt="promo_img"/>
            </div>
            {/* promo 2 */}
            <div className="grad flex-1 h-[250px] rounded-[8px] 
            overflow-hidden relative p-6 ">

              {/* text */}
              <div className="flex flex-col max-w-[250px] lg:max-w-[160px]  h-full justify-center">
                <div className="text-[20px] uppercase font-meduim leading-tight mb-4">
                  Save 25% mirrorless cameras
                  </div>
                  <a href="#" className="uppercase text-accent" alt="img">
                    shop now
                  </a>
              </div>

              {/* img */}
              <img className="absolute z-20 -top-2 -right-4" src={promo_img2} alt="promo_img2"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
