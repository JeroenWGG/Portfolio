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
          title: "Project 1",
          link: "/project1",
          image: "https://picsum.photos/350"
        },
        {
          id: 1,
          title: "Project 2",
          link: "/project2",
          image: "https://picsum.photos/350"
        },
        {
          id: 2,
          title: "Project 3",
          link: "/project3",
          image: "https://picsum.photos/350"
        },
        {
          id: 3,
          title: "Project 4",
          link: "/project4",
          image: "https://picsum.photos/350"
        },
        {
          id: 4,
          title: "Project 5",
          link: "/project5",
          image: "https://picsum.photos/350"
        },
        {
          id: 5,
          title: "Project 6",
          link: "/project6",
          image: "https://picsum.photos/350"
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
