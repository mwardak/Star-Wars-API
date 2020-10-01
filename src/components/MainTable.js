import React from "react";
import { Table, Container } from "react-bootstrap";

const MainTable = ({ characters, loading }) => {
  // if (loading) {
  //   return <h2>Loading...</h2>;
  // };

  const listOfCharacters = characters.map((character) => {
    return (
      <tr>
        <td>{character.name}</td>
        <td>{character.birth_year}</td>
        <td>{character.height}</td>
        <td>{character.mass}</td>
        <td>{character.worldName}</td>
        <td>{character.speciesType}</td>
      </tr>
    );
  });

  return (
    <Container>
      <div>
        <Table className="table-striped table-bordered">
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
      </div>
    </Container>
  );
};

export default MainTable;
