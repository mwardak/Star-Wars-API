import React, { useRef } from "react";

const SearchBar = ({ characterSearch }) => {
  const searchRef = useRef("");

  return (
    <form
      className="text-center"
      onSubmit={(e) => {
        e.preventDefault();
        characterSearch(searchRef.current.value);
      }}
    >
      <h1 className="text-center text-success">Star Wars API</h1>
      <div>
        <div>
          <input
            ref={searchRef}
            type="text"
            className="form-group ml-4 auto"
            placeholder="   Search Character"
          ></input>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
