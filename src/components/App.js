import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import MainTable from "./MainTable";
import Pagination from "./Pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const App = () => {
  const [characters, setCharacters] = useState([]);

  const fetchCharacter = async () => {
    const characterResponse1 = await axios.get("https://swapi.dev/api/people/");
    for (const character of characterResponse1.data.results) {
      const homeWorldResponse = await axios.get(character.homeworld);
      character["worldName"] = homeWorldResponse.data.name;
      setCharacters(characterResponse1.data.results);
      
      if (character.species.length === 0) {
        character["speciesType"] = "Human";
      } else {
        const speciesResponse = await axios.get(character.species[0]);
        character["speciesType"] = speciesResponse.data.name;
       
      } 
      setCharacters(characterResponse1.data.results);
      
    }
  };
  useEffect(() => {
    
    fetchCharacter();
    
  }, []);

  const getPages = async (page) => {
    const characterResponse1 = await axios.get(`https://swapi.dev/api/people/?page=${page}`);

    setCharacters(characterResponse1.data.results);
  };

  // const characterResponse2 = await axios.get('http://swapi.dev/api/people/?page=2');
  // const characterResponse3 = await axios.get('http://swapi.dev/api/people/?page=3');
  // const characterResponse4 = await axios.get('http://swapi.dev/api/people/?page=4');
  // const characterResponse5 = await axios.get('http://swapi.dev/api/people/?page=5');
  // const characterResponse6 = await axios.get('http://swapi.dev/api/people/?page=6');
  // const characterResponse7 = await axios.get('http://swapi.dev/api/people/?page=7');
  // const characterResponse8 = await axios.get('http://swapi.dev/api/people/?page=8');
  // const characterResponse9 = await axios.get('http://swapi.dev/api/people/?page=9');

  return (
    <div className="container">
      <SearchBar />
      <MainTable
        characters={characters}
        // loading={loading}
      />
      <Pagination getPages={getPages} />
    </div>
  );
};

export default App;
