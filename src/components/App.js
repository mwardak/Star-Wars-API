import React, { useState } from 'react';
import SearchBar from './SearchBar';
import MainTable from './MainTable';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';



const App = () => {
  const [character, setCharacter] = useState()
  

 

  axios.get('https://swapi.dev/api/people/')
  .then(response => {
  console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

  

    return (
      <div>
        <SearchBar />
        <MainTable />
      </div>
    );
  }



export default App;
