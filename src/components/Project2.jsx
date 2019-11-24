import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Title from "./Title";
import ZoomImg from "./ZoomImg";
import Breadcrumbs from "./Breadcrumbs";

class Project2 extends Component {
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
          link: "/project2",
          name: "Project 2"
        }
      ],
      projectImages: [
        {
          id: 0,
          src: "/img/project-2-1.jpg"
        },
        {
          id: 1,
          src: "/img/project-2-2.jpg"
        },
        {
          id: 2,
          src: "/img/project-2-3.jpg"
        },
        {
          id: 3,
          src: "/img/project-2-4.jpg"
        }
      ]
    };
  }
  render() {
    return (
      <div className="react-transition fade-in">
        <Breadcrumbs data={this.state.breadcrumbs} />
        <Title name="Tweakwise implementatie"></Title>
        <Container className="projecten">
          <Row>
            <Col xs={12}>
              <p>Datum: 24 november 2019</p>
              <h2>Wat heb ik gedaan?</h2>
              <p>
                Voor dit project heb ik het softwarepakket van Tweakwise
                gebruikt voor conversieoptimalisatie op de website van Plein.
                Door samen te werken met verschillende category managers konden
                we de filtering met deze software stapsgewijs over een groot
                deel van de website doorvoeren. De category managers waren
                verantwoordelijk voor de inhoud en ik voor de implementatie. Dit
                gaf een enorme boost aan het conversiepercentage van de website!
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
                In het softwarepakket van Tweakwise kon ik het zoekalgoritme
                aanpassen op de website. Door aanpassingen aan dit algoritme te
                maken en deze te testen kon ik het aantal search exits verlagen.
              </p>
              <h2>Wat heb ik ervan geleerd?</h2>
              <p>
                Tijdens dit project heb ik geleerd om samen te werken met
                verschillende afdelingen binnen een organisatie. Tevens heb ik
                ervaring opgedaan met contact houden van een externe partij. Het
                meest uitdagende van dit project was voor mij het handhaven van
                deadlines van andere mensen, omdat ik hier nog weinig ervaring
                mee had. Tijdens dit project heb ik geleerd dat het heel
                belangrijk is om duidelijke afspraken te maken over deadlines.
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
          <Row>
            <Col xs={12} lg={12} xl={12}>
              <p>
                Tenslotte heb ik geleerd om de werking van een bestaande
                implementatie op een website te analyseren en begrijpen.
                Hierdoor kreeg ik de volledige verantwoordelijkheid over dit
                software pakket.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Project2;
