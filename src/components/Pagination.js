import React from "react";
import { Button, Container } from "react-bootstrap";

const Pagination = ({ getPages }) => {
  let pages = [];

  for (let i = 1; i <= 9; i++) {
    pages.push(i);
  }

  const paginate = pages.map((page) => (
    <Button key={page} onClick={() => getPages(page)} variant="outline-success">
      {page}    
    </Button>
  ));

  return (
    <Container>
      <nav>{paginate}</nav>
    </Container>
  );
};

export default Pagination;
