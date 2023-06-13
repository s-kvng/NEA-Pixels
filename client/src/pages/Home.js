import React from 'react';
//useFetch hook
import useFetch from '../hooks/useFetch.js';

//import component
import LatestProducts from '../components/LatestProducts.js';
import Hero from '../components/Hero.js'



const Home = () => {
  //get products filtered by isNew
  const { data , isLoading } = useFetch('/products?populate=*&filters[isNew]=true');  
  

  return(

    <section>
      <Hero />
      <LatestProducts data={data} loading={isLoading}/>
    </section>
    
  );
};

export default Home;
