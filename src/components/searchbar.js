import React from "react";


const SearchBar = ({characters, handleOnChange}) => {




  return (
    <form  className="text-center">
      <h1 className="text-center text-success">Star Wars API</h1>
      <div>
        <div>
          <input value={characters} onChange={(e) => handleOnChange(e)} ref={characters} type="text"  className="form-group ml-4 auto" placeholder=  "   Search Character"></input>
        </div>
      </div>
    </form>
  );
}


export default SearchBar;
