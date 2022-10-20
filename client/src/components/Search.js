import React from "react";

const Search = ({ search, setInput }) => {
  function inputHandler(e) {
    setInput(e.target.value);
  }

  return (
    <div className="search">
      <div className="searchContainer">
        <input onChange={inputHandler} type="text" />
        <button onClick={search}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  );
};

export default Search;
