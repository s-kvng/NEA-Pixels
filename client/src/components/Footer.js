import React from "react";

//icons
import { FaYoutube, FaInstagram , FaTwitter , FaFacebook, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-primary pt-10">
      <div className=" container mx-auto">
        <div className="text-center">
          <h2 className="h2 uppercase mb-4">Subscribe to our newsletter</h2>
          <p className="mb-5">Be the first to recieve any update on any product</p>
        </div>

        {/*  */}
        <form className=" relative w-full max-w-3xl mx-auto mb-6">
            <input type="text" placeholder="Your email address" className="input" />
            <button className="btn btn-accent absolute top-0 right-0 w-[110px] md:w-[150px] text-[14px]">Subcribe</button>
        </form>

        {/* links */}
        <div className="flex flex-col items-center gap-y-6">
          {/*  */} 

          <div className="flex gap-x-10 text-gray-300">
            <a href="#" className="hover:text-white  transition-all capitalize">
              Returns Policy
              </a>
              <a href="#" className="hover:text-white transition-all">
              Track your order
              </a>
              <a href="#" className="hover:text-white transition-all">
              Shipping and Delivery
              </a>
             
          </div>

            {/* socials */}
          <div className=" flex text-2xl text-gray-300 justify-center gap-x-10 mb-5">
          <a href="#" className="hover:text-white text-sky-500 transition-all">
             <FaTwitter />
              </a>
              <a href="#" className="hover:text-white text-blue-700 transition-all">
             <FaFacebook />
              </a>
              <a href="#" className="hover:text-white text-pink-300 transition-all">
             <FaInstagram />
              </a>
              <a href="#" className="hover:text-white text-red-600 transition-all">
             <FaYoutube />
              </a>
              <a href="#" className="hover:text-white text-blue-600 transition-all">
             <FaLinkedin />
              </a>
          </div>

        </div>
      </div>

      {/* copyright */}
      <div className=" py-10 border-t border-t-white/10 text-center" >
        <div>
            <div className="text-[15px] text-zinc-400">Copyright &copy; Nea-Pixels 2023. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
