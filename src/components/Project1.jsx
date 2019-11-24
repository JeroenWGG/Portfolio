import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Title from "./Title";
import ZoomImg from "./ZoomImg";
import Breadcrumbs from "./Breadcrumbs";

class Project1 extends Component {
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
          link: "/project1",
          name: "Project 1"
        }
      ],
      projectImages: [
        {
          id: 0,
          src: "/img/project-1-1.jpg"
        },
        {
          id: 1,
          src: "/img/project-1-2.jpg"
        },
        {
          id: 2,
          src: "/img/project-1-3.jpg"
        },
        {
          id: 3,
          src: "/img/project-1-4.jpg"
        }
      ]
    };
  }
  render() {
    return (
      <div className="react-transition fade-in">
        <Breadcrumbs data={this.state.breadcrumbs} />
        <Title name="Datatrics implementatie"></Title>
        <Container className="projecten">
          <Row>
            <Col xs={12}>
              <h2>Wat heb ik gedaan?</h2>
              <p>
                Voor dit project heb ik het customer data platform Datatrics
                geïmplementeerd op de website van online retailer Plein. Ik was
                verantwoordelijk voor het bedenken van de customer journey en de
                implementatie van touchpoints. Deze touchpoints waren
                contactpunten met klanten in de verschillende fases die zij
                doorlopen bij een website bezoek. Het customer data platform kon
                op basis van klantgegevens de meest relevante content voor
                bezoekers selecteren.
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
                Met dit in gedachte ben ik begonnen met het implementeren van
                persoonlijke aanbiedingen op de homepagina’s van Plein.
                Vervolgens ben ik aan de slag gegaan met cross en up-sell
                blokken op de productdetailpagina’s en kassakoopjes in de
                winkelmand. Tenslotte had ik notificaties ingesteld die uit
                onderzoek goed werken op bepaalde fases in de customer journey.
                Deze implementatie had een zeer positieve impact op het
                conversiepercentage van Plein.
              </p>
              <h2>Wat heb ik ervan geleerd?</h2>
              <p>
                Tijdens dit project heb ik geleerd om personalisatie software te
                implementeren op een website. Ook heb ik geleerd dat het
                implementeren van dit soort software pakketten niet zonder slag
                of stoot gaat. Door performance issues en bugs liep
                implementatie erg uit waardoor zelfs bijna werd gekozen voor het
                stopzetten van dit pakket. Uiteindelijk heb ik samen met het
                marketingteam, Datatrics en Fingerspitz gezorgd voor een
                succesvolle implementatie van het customer data platform. Ook
                heb ik tijdens dit project geleerd om data uit grote databases
                te verbinden en gebruiken voor dynamische content. Ook heb ik
                hier een stukje ervaring opgedaan in de harde wereld van de
                retail. Door harde onderhandelingen en duidelijke afspraken kon
                ik Datatrics overhalen dat een directe communicatielijn nodig
                was tussen de twee partijen voor een succesvol resultaat.
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

export default Project1;
