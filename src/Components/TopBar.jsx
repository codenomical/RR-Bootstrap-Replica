// Created TopBar.jsx under src/Componenets

import { Navbar, Nav, Button } from 'react-bootstrap';

function TopBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand style={{ margin: "5px 0 0 20px" }} href="#home">
        <img src="[Instacart logo src]" alt="Instacart Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav>
          <Nav.Link href="#Login">Log In</Nav.Link>
          <Button variant="success">Sign Up</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopBar;
