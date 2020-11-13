import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink} from "react-router-dom";
import "./Navbar.css";

const Toolbar = () => {
  return  (
    <Navbar className="toolbar" fixed="top" bg="light" expand="sm">
      <Navbar.Brand  as={NavLink} to="/relax">Relax With Me</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="ml-auto">
          <Nav.Link as={NavLink} to="/relax">Relax</Nav.Link>
          <Nav.Link as={NavLink} to="/about">About</Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Toolbar;
