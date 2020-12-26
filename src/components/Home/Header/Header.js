import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import welcome from "../../../images/welcome.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/home">
          <img style={{ width: "150px" }} src={welcome} alt="welcome" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/images">Images</Nav.Link>
            <Nav.Link href="/posts">Posts</Nav.Link>
            <Nav.Link href="/albums">Albums</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <FontAwesomeIcon className="mr-1" icon={faUserAlt} />
            <span style={{ fontSize: "small" }}>Log In/Sign Up</span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
