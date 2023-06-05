import React from 'react';
//useFetch hook
import useFetch from '../hooks/useFetch.js';

//import component
import LatestProducts from '../components/LatestProducts.js';

const Home = () => {
  //get products
  const { data } = useFetch('/products?populate=*&filters[isNew]=true');  
  

  return(

    <>
      <LatestProducts data={data}/>
    </>
    
  );
};

export default Home;
