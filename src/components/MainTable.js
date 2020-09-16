import React from "react";
import { Table, Container } from 'react-bootstrap';


const MainTable = () => {

  return (
    <Container>
    <div>
      <Table className='table-striped table-bordered'>
        <tr className="thead-dark">
          <th>Name</th>
          <th>DOB</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Homeworld</th>
          <th>Species</th>
        </tr>
        <tr>
          <td></td>
        </tr>
      </Table>
    </div>
    </Container>
  );
};

export default MainTable;
