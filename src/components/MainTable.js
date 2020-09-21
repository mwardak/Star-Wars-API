import React from 'react';
import { Table, Container } from 'react-bootstrap';


const MainTable = (props) => {

  const characterRows = this.props.characters.map((character) => {
    return character;
  });
   
   
  
  return (
    <Container>
    <div>
      <Table className='table-striped table-bordered'>
        <thead>
        <tr className='thead-dark'>
          <th>Name</th>
          <th>DOB</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Homeworld</th>
          <th>Species</th>
        </tr>
        </thead>
        <tbody>
          <tr >{characterRows}</tr>
        </tbody>
      </Table>
    </div>
    </Container>
  );
};

export default MainTable;
