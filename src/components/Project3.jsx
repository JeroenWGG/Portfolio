import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Title from "./Title";
import ZoomImg from "./ZoomImg";
import Breadcrumbs from "./Breadcrumbs";

class Project3 extends Component {
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
          link: "/project3",
          name: "Project 3"
        }
      ],
      projectImages: [
        {
          id: 0,
          src: "/img/project-3-1.jpg"
        },
        {
          id: 1,
          src: "/img/project-3-2.jpg"
        },
        {
          id: 2,
          src: "/img/project-3-3.jpg"
        },
        {
          id: 3,
          src: "/img/project-3-4.jpg"
        }
      ]
    };
  }
  render() {
    return (
      <div className="react-transition fade-in">
        <Breadcrumbs data={this.state.breadcrumbs} />
        <Title name="Redesign productdetailpagina"></Title>
        <Container className="projecten">
          <Row>
            <Col xs={12}>
              <p>Datum: 24 november 2019</p>
              <h2>Wat heb ik gedaan?</h2>
              <p>
                Voor dit project had ik de verantwoordelijkheid om de
                productdetailpagina van Plein opnieuw te ontwerpen. Het funnel
                percentage van deze pagina was namelijk erg laag op mobiel.
                Hierdoor was het interessant om een nieuw “mobile first” ontwerp
                te creëren. Door de belangrijkste informatie voor de klant te
                inventariseren kon ik deze uitwerken boven de fold van het
                ontwerp. Na vele iteraties kon ik samen met de IT afdeling het
                ontwerp ontwikkelen en testen.
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
                Het ontwerp was naast een verbetering van het oude ontwerp van
                de pagina ook beter voor de bezoekers, omdat het funnel
                percentage met 10% steeg!
              </p>
              <h2>Wat heb ik ervan geleerd?</h2>
              <p>
                Tijdens dit project heb ik geleerd om het designproces samen met
                verschillende afdelingen in een organisatie te doorlopen. Ook
                heb ik geleerd om te ontwerpen binnen bepaalde functionele
                beperkingen. Zo konden wij tijdens dit project geen asynchrone
                technologieën toepassen doordat de IT afdeling te weinig kennis
                had van front-end development.
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
                Tenslotte heb ik tijdens dit project geleerd dat elke
                designkeuze bewaard moet worden, omdat je hierdoor duidelijk kan
                uitleggen waarom elementen bepaalde plekken hebben in het
                ontwerp.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Project3;
