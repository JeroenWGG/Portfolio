import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Title from "./Title";
import ZoomImg from "./ZoomImg";
import Breadcrumbs from "./Breadcrumbs";

class Project4 extends Component {
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
          link: "/project4",
          name: "Project 4"
        }
      ],
      projectImages: [
        {
          id: 0,
          src: "/img/project-4-1.jpg"
        },
        {
          id: 1,
          src: "/img/project-4-2.jpg"
        },
        {
          id: 2,
          src: "/img/project-4-3.jpg"
        },
        {
          id: 3,
          src: "/img/project-4-4.jpg"
        }
      ]
    };
  }
  render() {
    return (
      <div className="react-transition fade-in">
        <Breadcrumbs data={this.state.breadcrumbs} />
        <Title name="Pitlo interieur renovatie"></Title>
        <Container className="projecten">
          <Row>
            <Col xs={12}>
              <p>Datum: 24 november 2019</p>
              <h2>Wat heb ik gedaan?</h2>
              <p>
                Dit was een freelance project voor een zelfstandig ondernemer.
                Deze ondernemer had dringend een nieuwe website nodig en had
                geen geld voor dure templates en geen tijd om zijn website te
                onderhouden. Voor dit project heb ik dan ook zonder templates
                met basis HTML, CSS , JavaScript en een kleine beetje PHP een
                single page webpagina gemaakt.
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
                Ook is deze website volledig responsive voor mobiele apparaten.
                Ook heb ik aan deze website Google Analytics gekoppeld om het
                bezoekersgedrag inzichtelijk te maken voor de klant. Hier een
                linkje naar de website:{" "}
                <a href="http://www.pitlo-renovatie.nl">
                  http://www.pitlo-renovatie.nl
                </a>
              </p>
              <h2>Wat heb ik ervan geleerd?</h2>
              <p>
                Tijdens dit project heb ik geleerd om zelfstandig een project te
                ondernemen met een kleine onderneming. Tevens heb ik geleerd om
                alle afspraken en verwachtingen te beschrijven en bespreken
                voordat ik een project start om zo conflicten te voorkomen.
                Tenslotte heb ik geleerd om bootstrap te gebruiken!
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={6} xl={6} className="mb-4 imageStyle">
              <ZoomImg src={this.state.projectImages[2].src} />
            </Col>
            <Col xs={12} lg={6} xl={6} className="mb-4 imageStyle">
              <ZoomImg src={this.state.projectImages[3].src} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Project4;
