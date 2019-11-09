import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footerTitle: "2019 © Copyright Jeroen Wiersma. All Rights Reserved"
    };
  }
  render() {
    return (
      <div className="footerWrapper">
      <Container className="text-center p-5 footer">
        <Row>
          <Col>{this.state.footerTitle}</Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default Footer;
