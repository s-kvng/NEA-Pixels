import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {

  return (
    <Link to={`/product/${product.id}`}>
      <div className="grad w-full h-[362px] overflow-hidden rounded-[8px] relative group">
        {/*badge*/}
        {product.attributes.isNew ? (
          <div
            className="absolute bg-accent text-primary top-4 right-4 px-2 text-[12px]
          rounded-full upppercase font-extrabold z-10"
          >
            New
          </div>
        ) : (
          ""
        )}

        {/* image */}
        <div className="w-full h-[200px] flex items-center justify-center relative">
          <img
            className="w-[160px] h-[160px] group-hover:scale-90 transition-all"
            src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
            alt=""
          />
        </div>

        {/* Text */}
        <div className="px-6 pb-8 flex flex-col">
          {/* Category title*/}
          <div className="text-sm text-accent capitalized mb-2">
            {product.attributes.categories.data[0].attributes.title}
          </div>
          {/* title */}
          <div className="text-[15px] mb-4 lg:mb-9">
            {product.attributes.title.substring(0, 35)}...
          </div>
          {/* Prices */}
          <div className="text-lg text-accent">${product.attributes.price}</div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
