import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import MainTable from "./MainTable";
import Pagination from "./Pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const App = () => {
  const [characters, setCharacters] = useState([]);

  const [currentPage, setCurrentpage] = useState(1);
  
  // const [charactersPerPage, setCharactersPerPage] = useState(10);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCharacter = async () => {
      // const characterResponse1 = await axios.get("https://swapi.dev/api/people/?page=1");

      // for (const character of characterResponse1.data.results) {
      //   const homeWorldResponse = await axios.get(character.homeworld);

      //   character["worldName"] = homeWorldResponse.data.name;

      //   if (character.species.length === 0) {
      //     character["speciesType"] = "Human";
      //   } else {
      //     const speciesResponse = await axios.get(character.species[0]);
      //     character["speciesType"] = speciesResponse.data.name;y
      //   }
      // }

      
      
      
    };
    fetchCharacter();
    
    
  }, []);

  const getPages = async (page) => {
    const characterResponse1 = await axios.get(`https://swapi.dev/api/people/?page=1${page}`);

    
    // API Call
    setCurrentpage(characterResponse1.data.results);
    console.loge(page);
    
    // Set State to results
   }

  // const response2 = await axios.get('http://swapi.dev/api/people/?page=2');
  // const response3 = await axios.get('http://swapi.dev/api/people/?page=3');
  // const response4 = await axios.get('http://swapi.dev/api/people/?page=4');
  // const response5 = await axios.get('http://swapi.dev/api/people/?page=5');
  // const response6 = await axios.get('http://swapi.dev/api/people/?page=6');
  // const response7 = await axios.get('http://swapi.dev/api/people/?page=7');
  // const response8 = await axios.get('http://swapi.dev/api/people/?page=8');
  // const response9 = await axios.get('http://swapi.dev/api/people/?page=9');

  return (
    <div className="container">
      <SearchBar />
      <MainTable
        characters={characters}
        // loading={loading}
        // charactersPerPage={charactersPerPage}
      />
      <Pagination getPages={getPages} currentPage={currentPage} />
    </div>
  );
};

export default App;
