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
          link: "overmij",
          name: "Over mij"
        }
      ],
      development: [
        { id: 0, name: "HTML", number: "100" },
        { id: 1, name: "CSS", number: "100" },
        { id: 2, name: "jQuery", number: "75" },
        { id: 3, name: "Sass", number: "50" },
        { id: 4, name: "NPM", number: "50" },
        { id: 5, name: "Bootstrap", number: "100" },
        { id: 6, name: "Prettier", number: "100" },
        { id: 7, name: "ReactJS", number: "50" },
        { id: 8, name: "Git", number: "75" },
        { id: 9, name: "Wordpress", number: "75" }
      ],
      design: [
        { id: 10, name: "Adobe Indesign", number: "75" },
        { id: 11, name: "Adobe Illustrator", number: "75" },
        { id: 12, name: "Adobe Photoshop", number: "75" },
        { id: 13, name: "Adobe After Effects", number: "75" },
        { id: 14, name: "Adobe XD", number: "100" },
        { id: 15, name: "Design Thinking", number: "75" }
      ],
      marketing: [
        { id: 16, name: "Google Analytics", number: "100" },
        { id: 17, name: "Google Tag Manager", number: "75" },
        { id: 18, name: "Google Optimize", number: "100" },
        { id: 19, name: "Google Spreadsheets", number: "100" },
        { id: 20, name: "Google Docs", number: "100" },
        { id: 21, name: "Google Slides", number: "100" }
      ],
      talen: [
        { id: 22, name: "Nederlands", number: "100" },
        { id: 23, name: "Engels", number: "75" }
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
            <Col xs={12} sm={6}>
              <ZoomImg src="/img/AboutJeroen.png" />
              <p className="mt-4">
                Mijn naam is Jeroen Wiersma. Ik ben 24 jaar oud en woon samen
                met mijn vriendin in Houten. Mensen beschrijven mij meestal als
                sociaal, enthousiast, doorzetter, creatief en gestructureerd.
                Mijn passie ligt bij het leren van nieuwe dingen en deze meteen
                toepassen.
              </p>
              <p className="mt-4">
                Ik heb dan ook een brede opleiding gehad. Mijn opleiding was de
                bachelor Digitale Media en Communicatie. Op deze opleiding heb
                ik geleerd om marketing, design en front-end development te
                gebruiken binnen organisaties. Sinds ik klein ben heb ik al een
                grote fascinatie voor het web en de gigantische mogelijkheden
                voor razendsnelle communicatie. De nieuwste technologische
                ontwikkelingen probeer ik dan ook bij te houden.
              </p>
              <p className="mt-4">
                Door mijn “Jack of all trades” portfolio heb ik op deze pagina
                mijn vaardigheden gevisualiseerd en gecategoriseerd op
                marketing, development en design. Als je vragen hebt over het
                niveau van bepaalde vaardigheden kan je altijd contact met mij
                opnemen.
              </p>
            </Col>
            <Col xs={12} sm={6}>
              <h2 className="pb-2 pt-2 mb-3 text-center development">
                Development
              </h2>
              {this.state.development.map(data => {
                return (
                  <Skill
                    key={data.id}
                    number={data.number}
                    name={data.name}
                  ></Skill>
                );
              })}
              <h2 className="pb-2 pt-2 mb-3 text-center design">Design</h2>
              {this.state.design.map(data => {
                return (
                  <Skill
                    key={data.id}
                    number={data.number}
                    name={data.name}
                    variant="primary"
                  ></Skill>
                );
              })}
              <h2 className="pb-2 pt-2 mb-3 text-center marketing">
                Marketing
              </h2>
              {this.state.marketing.map(data => {
                return (
                  <Skill
                    key={data.id}
                    number={data.number}
                    name={data.name}
                    variant="warning"
                  ></Skill>
                );
              })}
              <h2 className="pb-2 pt-2 mb-3 text-center talen">Talen</h2>
              {this.state.talen.map(data => {
                return (
                  <Skill
                    key={data.id}
                    number={data.number}
                    name={data.name}
                    variant="danger"
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
