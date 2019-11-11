import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Title from "./Title";
import ZoomImg from "./ZoomImg";

class Project6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      <React.Fragment>
        <Title name="Project 6"></Title>
        <Container className="projecten">
          <Row>
            <Col xs={12} lg={6} xl={6} className="mb-4 imageStyle">
              <ZoomImg src={this.state.projectImages[0].src} />
            </Col>
            <Col xs={12} lg={6} xl={6} className="mb-4">
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
      </React.Fragment>
    );
  }
}

export default Project6;
