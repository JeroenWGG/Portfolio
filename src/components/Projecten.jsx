import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Project from "./Project";
import Title from "./Title";
import Breadcrumbs from "./Breadcrumbs";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbs: [
        {
          id: 0,
          link: "/",
          name: "Home"
        },
        {
          id: 1,
          link: "projecten",
          name: "Projecten"
        }
      ],
      projecten: [
        {
          id: 0,
          title: "Datatrics implementatie",
          link: "/project1",
          image: "img/datatrics.png"
        },
        {
          id: 1,
          title: "Tweakwise implementatie",
          link: "/project2",
          image: "img/tweakwise.png"
        },
        {
          id: 2,
          title: "Redesign productdetailpagina",
          link: "/project3",
          image: "img/pdp.png"
        },
        {
          id: 3,
          title: "Pitlo interieur renovatie",
          link: "/project4",
          image: "img/renovatie.png"
        },
        {
          id: 4,
          title: "Redesign bedankpagina",
          link: "/project5",
          image: "img/bedankpagina.png"
        },
        {
          id: 5,
          title: "Whiteboard animatie",
          link: "/project6",
          image: "img/animatie.png"
        }
      ]
    };
  }
  render() {
    return (
      <div className="react-transition fade-in">
        <Breadcrumbs data={this.state.breadcrumbs} />
        <Title name="Projecten" />
        <Container className="projecten">
          <Row>
            {this.state.projecten.map(data => {
              return (
                <Project
                  key={data.id}
                  title={data.title}
                  link={data.link}
                  image={data.image}
                />
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Portfolio;
