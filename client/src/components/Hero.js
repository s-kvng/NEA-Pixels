import React from "react";

//import component
import MainSlider from "../components/MainSlider";
import CategoryNav from "../components/CategoryNav";

//import images
import promo_img1 from "../img/promo_img1.png";
import promo_img2 from "../img/promo_img2.png";

const Hero = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className=" flex flex-col gap-y-[30px] lg:flex-row lg:gap-x-[30px]  xl:flex-row xl:gap-x-[30px]">
          <div>
            {/* sidebar */}
            <CategoryNav />
          </div>

          {/* Main slider */}
          <div className="w-full max-w-lg bg-pink-200">
            <MainSlider />
          </div>

          {/* Promo imgs */}
          <div>
            {/* promo 1 */}
            <div>promo 1</div>
            {/* promo 2 */}
            <div>promo 2</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
