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


  return <div>Search</div>;
};

export default Search;
