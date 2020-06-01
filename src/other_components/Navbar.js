import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Navigation = () => {

return(
    <Navbar bg="secondary" variant="dark" expand="lg">
  <Navbar.Brand href="#home">Put Me On</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#results">Results</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);

}

export default Navigation;