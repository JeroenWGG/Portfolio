import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link as RouterLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Navigation() {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar expanded={expanded} expand="lg" variant="dark" fixed="top">
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
        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : "expanded")}
          aria-controls="responsive-navbar-nav"
        >
          <FontAwesomeIcon icon={faBars} />
        </Navbar.Toggle>
        <Navbar.Collapse id="">
          <Nav className="mr-auto">
            <Nav.Item>
              <RouterLink
                onClick={() => setExpanded(false)}
                className="nav-link"
                role="button"
                to="/"
              >
                Home
              </RouterLink>
            </Nav.Item>
            <Nav.Item>
              <RouterLink
                onClick={() => setExpanded(false)}
                className="nav-link"
                role="button"
                to="/projecten"
              >
                Projecten
              </RouterLink>
            </Nav.Item>
            <Nav.Item>
              <RouterLink
                onClick={() => setExpanded(false)}
                className="nav-link"
                role="button"
                to="/overmij"
              >
                Over mij
              </RouterLink>
            </Nav.Item>
            <Nav.Item>
              <RouterLink
                onClick={() => setExpanded(false)}
                className="nav-link"
                role="button"
                to="/contact"
              >
                Contact
              </RouterLink>
            </Nav.Item>
          </Nav>
          <a href="https://github.com/JeroenWGG?tab=repositories">
            <Button variant="outline-light">
              Mijn Github <FontAwesomeIcon icon={faGithub} />
            </Button>
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
