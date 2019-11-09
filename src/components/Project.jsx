import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import { Link as RouterLink } from "react-router-dom";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Col xs={12} lg={4} className="mb-4 item">
        <RouterLink to={this.props.link}>
          <Image src={this.props.image} fluid rounded></Image>
          <div className="item-overlay top rounded">{this.props.title}</div>
        </RouterLink>
      </Col>
    );
  }
}

export default Project;
