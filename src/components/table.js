import React from "react";
import { Table, Container } from "react-bootstrap";

class table extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const rows = this.props.character.map((characters) => {
      return (
        <tr>
          <td>{characters.name}</td>
          <td>{characters.birthdate}</td>
          <td>{characters.height}</td>
          <td>{characters.mass}</td>
          <td>{characters.homeworld}</td>
        </tr>
      );
    });

    return (
      <Container>
        <Table className="table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th></th>
              <th>name</th>
              <th>birthdate</th>
              <th>height</th>
              <th>mass</th>
              <th>homeworld</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Container>
    );
  }
}

export default table;
