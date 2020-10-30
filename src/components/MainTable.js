import React from "react";
import { Table, Container } from "react-bootstrap";

const MainTable = ({ characters, loading }) => {
  if (loading) {
    return (
      <h2>
        loading... <span className="spinner-grow text-light"></span>
      </h2>
    );
  }

  const listOfCharacters = characters.map((character) => {
    return (
      <tr key={character.name}>
        <td>{character.name}</td>
        <td>{character.birth_year}</td>
        <td>{character.height}</td>
        <td>{character.mass}</td>
        <td>{character.homeworld}</td>
        <td>{character.species}</td>
      </tr>
    );
  });

  return (
    <Container>
      <Table className="table-borderless">
        <thead>
          <tr className="thead-dark">
            <th>Name</th>
            <th>DOB</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Homeworld</th>
            <th>Species</th>
          </tr>
        </thead>
        <tbody>{listOfCharacters}</tbody>
      </Table>
    </Container>
  );
};

export default MainTable;
