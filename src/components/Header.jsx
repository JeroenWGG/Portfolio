import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Link as RouterLink } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: "img/jeroens.png",
      title: "Ik ben Jeroen Wiersma",
      subtitle: "Mijn passie is front-end development, UX design en CRO"
    };
  }

  render() {
    return (
      <div className="wrapper">
        <Container className="text-center mx-auto">
          <Row className="header">
            <Col>
              <h2>{this.state.title}</h2>
              <h3>{this.state.subtitle}</h3>
              <RouterLink to="/projecten">
                <Button variant="outline-light" className="m-2" size="lg">
                  <strong>MIJN WERK</strong>
                </Button>
              </RouterLink>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Header;
