import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavLink from "react-router-dom/NavLink";
import "./Navbar.css";

const Toolbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand  as={NavLink} to="/">Relax With Me</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="ml-auto">
          <Nav.Link as={NavLink} exact to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/relax">Relax</Nav.Link>
          <Nav.Link as={NavLink} to="/about">About</Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Toolbar;
