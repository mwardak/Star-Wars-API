import React from "react";
import { Button, Container } from "react-bootstrap";

export const Pagination = ({ getPages, currentPage }) => {

  let pages = [];

  for (let i = 1; i < i <= 9; i++){
    pages.push(i)
   
  }

  const paginate = pages.map((page) => (

    <Button key={page} onClick={(e) =>{getPages(2)}} variant="outline-success">
      {page}
    </Button>
  ));

  return (
    <Container>
      <nav>
  {/* <Button variant="outline-success" >1</Button>{" "}
       
        <Button variant="outline-success">3</Button>{" "}
        <Button variant="outline-success">4</Button>{" "}
        <Button variant="outline-success">5</Button>{" "}
        <Button variant="outline-success">6</Button>{" "}
        <Button variant="outline-success">7</Button>{" "}
        <Button variant="outline-success">8</Button>{" "}
        <Button variant="outline-success">9</Button>{" "} */}
        {paginate}
      </nav>
    </Container>
  );
};

export default Pagination;
