import React from "react";

//icons
import { FiSearch } from "react-icons/fi";

const SearchForm = () => {
  return (
    <form className=" w-full relative">
      <input
        className="input"
        type="text"
        placeholder="Search for a product..."
      />

      <button className="btn btn-accent absolute top-0 right-0
       rounded-tl-none rounded-bl-none">
        <FiSearch />
      </button>
    </form>
  );
};

export default SearchForm;
