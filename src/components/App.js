import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import MainTable from "./MainTable";
import Pagination from "./Pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const App = () => {
  const [characters, setCharacters] = useState([]);

  const fetchCharacter = async (page) => {
    const characterResponse1 = await axios.get(
      "https://swapi.py4e.com/api/people/?page=" + page
    );
    for (const character of characterResponse1.data.results) {
      const homeWorldResponse = await axios.get(character.homeworld);
      character["worldName"] = homeWorldResponse.data.name;

      if (character.species.length === 0) {
        character["speciesType"] = "Human";
      } else {
        const speciesResponse = await axios.get(character.species[0]);
        character["speciesType"] = speciesResponse.data.name;
      }
    }
    setCharacters(characterResponse1.data.results);
  };
  useEffect(() => {
    fetchCharacter(1);
  }, []);


  const getPages = async (page) => {
    fetchCharacter(page);
  };

  
  const handleOnChange = (e) => {
  
    const { value } = e.target;
    // setCharacters(e.target);

    console.log(value);
    
    
  };

  // const handleOnSubmit = (e) => {

  //       console.log(e.target);
    
  //       if (e.target.value) {
  //         setCharacters(e.target.value); 
  //       }
  // };



  return (
    <div className="container">
      <SearchBar handleOnChange={handleOnChange}/>
      <MainTable
        characters={characters}
        // loading={loading}
      />
      <Pagination getPages={getPages} />
    </div>
  );
};

export default App;
