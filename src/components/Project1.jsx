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
          src: "https://picsum.photos/1110/700"
        },
        {
          id: 1,
          src: "https://picsum.photos/1110/700"
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
            <Col xs={12} className="mb-4">
              <h2>Wat heb ik gedaan?</h2>
              <p>
                Datatrics is een personalisatie platform voor e-commerce
                websites. Dit personalisatie platform heb ik samen met het
                marketingteam gekoppeld aan de webshop Plein.nl. Door deze
                koppeling verzamelden wij gegevens van alle klanten die op de
                website kwamen mits zij natuurlijk toestemming gaven. Met deze
                data kon ik in de tool mensen relevante embedded content en
                notificaties sturen die hebben gezorgd voor een conversie
                stijging van <b>250.000 euro</b> per jaar. Dit project is
                genomineerd voor beste conversie optimalisatie project van 2019
                bij de{" "}
                <a href="https://dutchsearchawards.nl/">Dutch Search Awards</a>.
                De klanten werden binnen de tool in klantfases onderverdeeld en
                voor elke fase kon ik actiemechanismen aanmaken. De vier
                verschillende fases waren: Oriëntatiefase, vergelijkfase,
                besluitfase en evaluatiefase.
              </p>
            </Col>
            <Col className="mb-4 imageStyle">
              <ZoomImg src={this.state.projectImages[0].src} />
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={6} xl={6} className="mb-4 imageStyle">
              <ZoomImg src={this.state.projectImages[1].src} />
            </Col>
            <Col xs={12} lg={6} xl={6} className="mb-4">
              <h2>Wat heb ik ervan geleerd?</h2>
              <p>
                Quisque tincidunt mauris iaculis, suscipit tellus sed, porta
                nisi. Orci varius natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Donec at metus tellus. Mauris
                sed accumsan ex. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Nulla consectetur,
                sapien nec consectetur fermentum, arcu libero suscipit turpis,
                id pretium leo metus nec turpis. Maecenas elementum metus neque,
                id commodo risus placerat non. Pellentesque risus sapien,
                placerat id semper hendrerit, facilisis et mauris. Aenean dolor
                enim, sagittis et dolor eu, interdum faucibus velit. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia Curae; Aliquam varius ex at odio commodo, id porttitor
                dui rhoncus. Curabitur quis scelerisque elit. Cras vehicula
                augue vel turpis varius, sit amet tincidunt lacus eleifend.
                Aliquam ut nisl tortor. Vivamus non tortor tempus, vehicula
                velit eget, dignissim dui.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={6} xl={6} className="mb-4">
              <h2>Welke vaardigheden heb ik gebruikt?</h2>
              <p>
                Quisque tincidunt mauris iaculis, suscipit tellus sed, porta
                nisi. Orci varius natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Donec at metus tellus. Mauris
                sed accumsan ex. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Nulla consectetur,
                sapien nec consectetur fermentum, arcu libero suscipit turpis,
                id pretium leo metus nec turpis. Maecenas elementum metus neque,
                id commodo risus placerat non. Pellentesque risus sapien,
                placerat id semper hendrerit, facilisis et mauris. Aenean dolor
                enim, sagittis et dolor eu, interdum faucibus velit. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia Curae; Aliquam varius ex at odio commodo, id porttitor
                dui rhoncus. Curabitur quis scelerisque elit. Cras vehicula
                augue vel turpis varius, sit amet tincidunt lacus eleifend.
                Aliquam ut nisl tortor. Vivamus non tortor tempus, vehicula
                velit eget, dignissim dui.
              </p>
            </Col>
            <Col xs={12} lg={6} xl={6} className="mb-4 imageStyle">
              <ZoomImg src={this.state.projectImages[1].src} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Project1;
