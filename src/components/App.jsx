import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import Projecten from "./Projecten";
import About from "./About";
import Contact from "./Contact";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";
import Project5 from "./Project5";
import Project6 from "./Project6";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop />
        <Navigation />
        <Route render={(location) => {
          return (
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/projecten" component={Projecten} />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
          <Route path="/project1" component={Project1} />
          <Route path="/project2" component={Project2} />
          <Route path="/project3" component={Project3} />
          <Route path="/project4" component={Project4} />
          <Route path="/project5" component={Project5} />
          <Route path="/project6" component={Project6} />
        </Switch>
        )}
        <Footer />
      </Router>
    );
  }
}
export default App;
