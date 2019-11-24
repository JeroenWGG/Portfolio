import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Title from "./Title";
import ZoomImg from "./ZoomImg";
import Breadcrumbs from "./Breadcrumbs";

class Project5 extends Component {
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
        },
        {
          id: 2,
          link: "/project5",
          name: "Project 5"
        }
      ],
      projectImages: [
        {
          id: 0,
          src: "/img/project-5-1.jpg"
        },
        {
          id: 1,
          src: "/img/project-5-2.jpg"
        }
      ]
    };
  }
  render() {
    return (
      <div className="react-transition fade-in">
        <Breadcrumbs data={this.state.breadcrumbs} />
        <Title name="Redesign bedankpagina"></Title>
        <Container className="projecten">
          <Row>
            <Col xs={12}>
              <p>Datum: 24 november 2019</p>
              <h2>Wat heb ik gedaan?</h2>
              <p>
                Voor dit project moest ik samen met de brandmanager van Plein
                werken aan de sympathiek score. Door het ontwerp van de
                bedankpagina te veranderen konden we meer nieuwsbrief
                inschrijvingen binnen halen en verkeer sturen naar de blog van
                de website.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={6} xl={6} className="mb-4 imageStyle">
              <ZoomImg src={this.state.projectImages[0].src} />
            </Col>
            <Col xs={12} lg={6} xl={6} className="mb-4 imageStyle">
              <ZoomImg src={this.state.projectImages[1].src} />
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={12} xl={12}>
              <p>
                Vergelijkbaar met het productdetailpagina project moest ik hier
                samenwerken met meerdere afdelingen om mijn functionele
                ontwerpen werkelijkheid te maken. Als je nu wat besteld bij
                Plein.nl staat dit ontwerp momenteel live!
              </p>
              <h2>Wat heb ik ervan geleerd?</h2>
              <p>
                Ik heb tijdens dit project geleerd dat je ook kan testen voor
                andere doelen dan omzet. Zolang je het maar meetbaar maakt met
                kwalitatief onderzoek. Ook had ik geleerd om te ontwerpen met
                automatisering in gedachte. Zo worden de nieuwste blogs
                automatisch aangevuld in het ontwerp zodat de bedankpagina
                altijd nieuwe en relevante content heeft voor de klant.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Project5;
