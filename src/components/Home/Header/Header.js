import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../App";

const Header = (props) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <Navbar variant="dark" bg={props.bg} expand="lg">
      <Container>
        <Navbar.Brand href="/home">
          <img style={{ width: "160px" }} src={props.logo} alt="welcome" />
        </Navbar.Brand>
        <Navbar.Toggle
          className={props.color}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link className={props.color} href="/home">
              Home
            </Nav.Link>
            <Nav.Link className={props.color} href="/images">
              Images
            </Nav.Link>
            <Nav.Link className={props.color} href="/posts">
              Posts
            </Nav.Link>
            <Nav.Link className={props.color} href="/albums">
              Albums
            </Nav.Link>
          </Nav>
          <Nav className={`ml-auto ${props.color}`}>
            {loggedInUser.user && loggedInUser.user.name ? (
              <>
                {" "}
                <img
                  style={{ width: "35px", height: "35px", borderRadius: "50%" }}
                  src={loggedInUser.user.img}
                  alt=""
                />
                <small className="mx-2">{loggedInUser.user.name}</small>{" "}
              </>
            ) : (
              <>
                <FontAwesomeIcon className="mr-1" icon={faUserAlt} />
                <span style={{ fontSize: "small" }}>Log In/Sign Up</span>{" "}
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
