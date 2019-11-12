import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="greyContainer mb-4">
        <Container>
          <Row>
            <Col>
              <h1 className="pt-4 pb-4">{this.props.name}</h1>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Title;
