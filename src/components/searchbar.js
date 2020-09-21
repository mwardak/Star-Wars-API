import React from 'react';

const SearchBar = () => {
  return (
    <form className='text-center'>
      <h1 className='text-center text-success'>Star Wars API</h1>
      <div>
        <div>
          <span >Character:</span> 
          <input placeholder='Search Character?'></input>
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
