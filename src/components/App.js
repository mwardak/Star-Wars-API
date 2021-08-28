import React, { useState, useEffect } from "react";
import SearchBar from "./Search";
import MainTable from "./MainTable";
import Pagination from "./Pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "../styles.css";

const App = () => {

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCharacter = async (page) => {
    setLoading(true);
    const characterResponse1 = await axios.get(
      `https://swapi.dev/api/people/?page=${page}`
    );
    for (const character of characterResponse1.data.results) {
      const planet = character.homeworld
      const homeWorldResponse = await axios.get(planet);
      character.homeworld = homeWorldResponse.data.name;

      if (character.species.length === 0) {
        character.species = "Human";
      } else {
        const species = character.species[0];
        const speciesResponse = await axios.get(species);
        character.species = speciesResponse.data.name;
      }
    }
    setCharacters(characterResponse1.data.results);
    setLoading(false);
  };
  useEffect(() => {
    fetchCharacter(1);
  }, []);

  const getPages = async (page) => {
    fetchCharacter(page);
  };

  const characterSearch = async (searchTerm) => {
    setLoading(true);
    const characterSearchResponse = await axios.get(
      `https://swapi.dev/api/people/?search=${searchTerm}`
    );
    for (const character of characterSearchResponse.data.results) {
      const planet = character.homeworld
      const homeWorldResponse = await axios.get(planet);
      character.homeworld = homeWorldResponse.data.name;

      if (character.species.length === 0) {
        character.species = "Human";
      } else {
        const species = character.species[0]
        const speciesResponse = await axios.get(species);
        character.species = speciesResponse.data.name;
      }
    }
    setCharacters(characterSearchResponse.data.results);
    setLoading(false);
  };

  return (
    <div className="container">
      <SearchBar characterSearch={characterSearch} />
      <MainTable characters={characters} loading={loading} />
      <Pagination getPages={getPages} />
    </div>
  );
};

export default App;
