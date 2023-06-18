import React, { useContext , useState } from "react";

//images
import logo from "../img/nea-pixel2.png";
import { SlBag } from "react-icons/sl";
import { FiMenu } from "react-icons/fi";
//link
import { Link } from "react-router-dom";
//components
import SearchForm from "../components/SearchForm";
import CategoryNavMobile from "../components/CategoryNavMobile";
import Cart from "../components/Cart";
//car Context
import { CartContext } from "../context/CartContext";

const Header = () => {

  const {isOpen , setIsOpen , itemsAmount} =  useContext(CartContext);
  const [ catNavMobile , setCatNavMobile ] = useState(false);

  return (
    <header className="bg-primary py-6 md:py-6 w-full z-40 lg:relative lg:mb-[30px]">
      <div className="container mx-auto">
        <div className="flex flex-row sm:gap-20 md:gap-60 lg:gap-7  items-center justify-center
          mb-4 lg:mb-0">
          {/* menu */}
          <div onClick={()=>setCatNavMobile(true)} className="text-3xl lg:hidden cursor-pointer">
            <FiMenu />
          </div>

          {/* category nav mobile */}
          <div className={`
            ${ catNavMobile ? 'left-0' : '-left-full'}
            fixed top-0 bottom-0 w-full z-30 h-screen 
            transition-all duration-200
          `}>
            <CategoryNavMobile  setCatNavMobile={setCatNavMobile} />
          </div>

          {/* logo */}
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>

          {/* searchform - show only on desktop */}
          <div className="hidden w-full lg:flex lg:max-w-[430px]">
            <SearchForm />
          </div>

          {/* phone & cart */}
          <div className="flex items-center gap-x-[10px]">
            {/* phone */}
            <div className="hidden lg:flex uppercase">Need help ? 05582218741</div>
            {/* cart */}
            <div onClick={()=> setIsOpen(!isOpen)} className="relative cursor-pointer">
              <SlBag className="text-2xl" />
              {/* amount */}
              <div className="bg-accent absolute w-[16px] h-[16px] top-3 -right-1 flex 
              items-center justify-center rounded-full text-[13px]">
                {itemsAmount}
              </div>
            </div>

            {/* cart */}
            <div className={`
              ${isOpen ? 'right-0' : '-right-full'}
            bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 
            w-full z-10 md:max-w-[500px] transition-all duration-300`}>
              <Cart setIsOpen={setIsOpen}/>
            </div>
          </div>
        </div>

        {/* searchform - show on mobile only */}
        <div className="lg:hidden">
          <SearchForm />
        </div>
      </div>
    </header>
  );
};

export default Header;
