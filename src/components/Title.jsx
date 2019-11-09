import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <h1 className="pt-4 pb-4">
        <RouterLink to="/projecten">
          <FontAwesomeIcon icon={faChevronLeft} /> 
        </RouterLink>
        {this.props.name}
      </h1>
    );
  }
}

export default Title;
