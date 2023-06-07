import React, { useEffect, useState } from "react";

//icons
import { FiSearch } from "react-icons/fi";

//useNavigation hook
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {

  const navigate = useNavigate();
  const [searchTerm , setSearchTerm ] = useState('');
  const [ isAnimate , setIsAnimate ] = useState(false);


  useEffect(()=>{

    const timeout = setTimeout(()=>{
        setIsAnimate(false);

    }, 1000)

    // clear time out event
    return () => clearTimeout(timeout)
  })

  const handleInputText = (e) =>{
      setSearchTerm(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(searchTerm.length > 0){
      navigate(`/search?query=${searchTerm}`);
      document.querySelector('input').value = '';
    }
    else{
      // if input is empty set to true , to allow animation
      setIsAnimate(true)
    }
  }

  return (
    <form onSubmit={handleSubmit} 
    className={`${isAnimate ? 'animate-shake' : 'animate-none'} w-full relative`}>
      <input
      onChange={handleInputText}
        className="input"
        type="text"
        placeholder="Search for a product..."
      />

      <button className="btn btn-accent absolute top-0 right-0
       rounded-tl-none rounded-bl-none">
        <FiSearch  className="text-xl"/>
      </button>
    </form>
  );
};

export default SearchForm;
