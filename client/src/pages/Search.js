import React from 'react';

// useLocation hook
import { useLocation } from 'react-router-dom';

// useFetch hook
import useFetch from '../hooks/useFetch';

// components
import CategoryNav from '../components/CategoryNav';
import Product from '../components/Product';

const Search = () => {

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const searchTerm = searchParams.get('query');

  console.log(searchTerm)

//get product based on search term
const {data} = useFetch(`products?populate=*&filters[title][$contains]=${searchTerm}`)


  return (
    <div className="mb-[30px] pt-40 md:pt-5 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex gap-x-[30px]">
          <CategoryNav/>

          <div>
            {/* title */}
            <div className="py-3 text-xl uppercase text-center lg:text-left">
              { data?.length > 0 
                ? `${data?.length} results for ${searchTerm}`
                : `No results for ${searchTerm}`
              }
              

            </div>
            {/* product grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {data?.map((product)=>(
              <Product product={product} key={product.id}/>
            ))}
          </div>
          </div>
        </div>

      </div> 
    </div>
  );
};

export default Search;
