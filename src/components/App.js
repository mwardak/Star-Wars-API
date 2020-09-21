import React, { useState } from 'react';
import SearchBar from './SearchBar';
import MainTable from './MainTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';



const App = async () => {
  const [characters, setCharacter] = useState([]);

  const response1 = await axios.get('https://swapi.dev/api/people/');
  setCharacter(response1.results);

console.log(characters);

  // const response2 = await axios.get('http://swapi.dev/api/people/?page=2');
  // const response3 = await axios.get('http://swapi.dev/api/people/?page=3');
  // const response4 = await axios.get('http://swapi.dev/api/people/?page=4');
  // const response5 = await axios.get('http://swapi.dev/api/people/?page=5');
  // const response6 = await axios.get('http://swapi.dev/api/people/?page=6');
  // const response7 = await axios.get('http://swapi.dev/api/people/?page=7')
  // const response8 = await axios.get('http://swapi.dev/api/people/?page=8');
  // const response9 = await axios.get('http://swapi.dev/api/people/?page=9');

 

  // axios.get('https://swapi.dev/api/people/')
  // .then(response => {
  // console.log(response.data);
  // })
  // .catch(error => {
  //   console.log(error);
  // });

  

    return (
      <div>
        <SearchBar />
        <MainTable characters={characters}/>
      </div>
    );
  }



export default App;
