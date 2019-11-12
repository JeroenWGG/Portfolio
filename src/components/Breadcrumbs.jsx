import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { Link as RouterLink } from "react-router-dom";

class Breadcrumbs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            {this.props.data.map(data => {
              return (
                <RouterLink
                  key={data.id}
                  className="breadcrumbs"
                  to={data.link}
                >
                  {data.name}
                </RouterLink>
              );
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Breadcrumbs;
