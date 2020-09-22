import React from 'react';
import { Table, Container } from 'react-bootstrap';

const MainTable = ({ characters, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }



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
            {/* <tr>{character}</tr> */}
            </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default MainTable;
