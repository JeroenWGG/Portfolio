import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Skill from "./Skill";
import ZoomImg from "./ZoomImg";
import Title from "./Title";
import Breadcrumbs from "./Breadcrumbs";

class Skills extends Component {
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
          link: "about",
          name: "Over mij"
        }
      ],
      skills: [
        { id: 0, name: "HTML", number: "100" },
        { id: 1, name: "CSS", number: "100" },
        { id: 2, name: "jQuery", number: "75" },
        { id: 3, name: "Sass", number: "50" },
        { id: 4, name: "NPM", number: "50" },
        { id: 5, name: "Bootstrap", number: "100" },
        { id: 6, name: "Prettier", number: "100" },
        { id: 7, name: "ReactJS", number: "50" },
        { id: 8, name: "Git", number: "75" },
        { id: 9, name: "Wordpress", number: "75" },
        { id: 10, name: "Adobe Indesign", number: "75" },
        { id: 11, name: "Adobe Illustrator", number: "75" },
        { id: 12, name: "Adobe Photoshop", number: "75" },
        { id: 13, name: "Adobe After Effects", number: "75" },
        { id: 14, name: "Design Thinking", number: "75" },
        { id: 15, name: "Google Analytics", number: "100" },
        { id: 16, name: "Google Tag Manager", number: "75" },
        { id: 17, name: "Google Optimize", number: "100" },
        { id: 18, name: "Google Spreadsheets", number: "100" },
        { id: 19, name: "Google Docs", number: "100" },
        { id: 20, name: "Google Slides", number: "100" },
        { id: 21, name: "Nederlands", number: "100" },
        { id: 22, name: "Engels", number: "75" }
      ]
    };
  }
  render() {
    return (
      <div className="react-transition fade-in">
        <Breadcrumbs data={this.state.breadcrumbs} />
        <Title name="Over mij"></Title>
        <Container>
          <Row>
            <Col>
              <ZoomImg src="/img/AboutJeroen.png" />
              <p className="mt-4">
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
                velit eget, dignissim dui. Aenean dolor enim, sagittis et dolor
                eu, interdum faucibus velit. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam
                varius ex at odio commodo, id porttitor dui rhoncus. Curabitur
                quis scelerisque elit. Cras vehicula augue vel turpis varius,
                sit amet tincidunt lacus eleifend. Aliquam ut nisl tortor.
                Vivamus non tortor tempus, vehicula velit eget, dignissim dui.
                Aenean dolor enim, sagittis et dolor eu, interdum faucibus
                velit. Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia Curae; Aliquam varius ex at odio
                commodo, id porttitor dui rhoncus. Curabitur quis scelerisque
                elit. Cras vehicula augue vel turpis varius, sit amet tincidunt
                lacus eleifend. Aliquam ut nisl tortor. Vivamus non tortor
                tempus, vehicula velit eget, dignissim dui.
              </p>
            </Col>
            <Col>
              {this.state.skills.map(data => {
                return (
                  <Skill
                    key={data.id}
                    number={data.number}
                    name={data.name}
                  ></Skill>
                );
              })}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Skills;
