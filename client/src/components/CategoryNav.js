import React from "react";

//import hook
import useFetch from "../hooks/useFetch";

//link
import { Link } from "react-router-dom";

const CategoryNav = () => {
  const { data } = useFetch("/categories");

  return (
    <aside className="hidden lg:flex">
      <div className="bg-primary flex flex-col w-[286px] lg:w-[200px] xl:w-[286px] h-[500px] rounded-[8px] overflow-hidden">
          <div className="bg-accent py-4 text-primary uppercase font-semibold flex justify-center items-center">
            Browse Categories
          </div>
          <div className="flex flex-col gap-y-6 p-6">
            {data?.map((category, index)=>(

              <Link to={`/products/${category.id}`} className="cursor-pointer uppercase " id={index} key={category.id}>
                {category.attributes.title}
              </Link>
            ))}
          </div>
      </div>
    </aside>
  );
};

export default CategoryNav;
