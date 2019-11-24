import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Title from "./Title";
import ZoomImg from "./ZoomImg";
import Breadcrumbs from "./Breadcrumbs";

class Project6 extends Component {
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
          link: "/project6",
          name: "Project 6"
        }
      ],
      projectImages: [
        {
          id: 0,
          src: "/img/project-6-1.jpg"
        },
        {
          id: 1,
          src: "/img/project-6-2.jpg"
        },
        {
          id: 2,
          src: "/img/project-6-3.jpg"
        },
        {
          id: 3,
          src: "/img/project-6-4.jpg"
        }
      ]
    };
  }
  render() {
    return (
      <div className="react-transition fade-in">
        <Breadcrumbs data={this.state.breadcrumbs} />
        <Title name="Whiteboard animatie"></Title>
        <Container className="projecten">
          <Row>
            <Col xs={12}>
              <p>Datum: 24 november 2019</p>
              <h2>Wat heb ik gedaan?</h2>
              <p>
                Voor dit project heb ik voordat ik bij Plein werkte een klus
                voor ze uitgevoerd. Plein was namelijk bezig met de promotie van
                het dentaal platform. Het dentaal platform was voor tandartsen
                om producten te bestellen voor hun patiënten.
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
                De animatie moest in 91 seconden duidelijk maken wat dit concept
                precies inhield en staat momenteel nog steeds op de website.
                Hier een linkje naar het resultaat:{" "}
                <a href="https://m.youtube.com/watch?v=A3EC66WnXh4">
                  https://m.youtube.com/watch?v=A3EC66WnXh4
                </a>
              </p>
              <h2>Wat heb ik ervan geleerd?</h2>
              <p>
                Ik heb tijdens dit project geleerd om met Adobe After Effects
                whiteboards animaties te maken. Ook heb ik geleerd om met een
                grotere organisatie een zelfstandig project uit te voeren. Ook
                heb ik geleerd dat een kleine samenwerking kan leiden tot veel
                meer samenwerkingen. Ik heb na deze opdracht namelijk stage
                gelopen bij dit bedrijf. Na mijn stage was ik aangenomen als
                Junior Conversie Manager bij Plein.
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

export default Project6;
