import React, { Component } from "react";
import Header from "./Header";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="react-transition fade-in">
        <Header />
      </div>
    );
  }
}

export default Home;
