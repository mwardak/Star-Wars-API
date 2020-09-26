import React from "react";
import { Button, Container } from "react-bootstrap";

export const Pagination = ({ currentPage }) => {
  return (
    <Container>
      <nav>
        <Button variant="outline-success">1</Button>{" "}
        <Button variant="outline-success">2</Button>{" "}
        <Button variant="outline-success">3</Button>{" "}
        <Button variant="outline-success">4</Button>{" "}
        <Button variant="outline-success">5</Button>{" "}
        <Button variant="outline-success">6</Button>{" "}
        <Button variant="outline-success">7</Button>{" "}
        <Button variant="outline-success">8</Button>{" "}
        <Button variant="outline-success">9</Button>{" "}
      </nav>
    </Container>
  );
};

export default Pagination;
