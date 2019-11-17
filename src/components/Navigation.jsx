import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link as RouterLink } from "react-router-dom";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar expand="lg" variant="dark" fixed="top">
        <Container>
          <RouterLink to="/">
            <Navbar.Brand>
              <img
                src="\img\brand.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Brand logo"
              />
            </Navbar.Brand>
          </RouterLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <FontAwesomeIcon icon={faBars} />
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <RouterLink className="nav-link" role="button" to="/">
                Home
              </RouterLink>
              <RouterLink className="nav-link" role="button" to="/projecten">
                Projecten
              </RouterLink>
              <RouterLink className="nav-link" role="button" to="/overmij">
                Over mij
              </RouterLink>
              <RouterLink className="nav-link" role="button" to="/contact">
                Contact
              </RouterLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
