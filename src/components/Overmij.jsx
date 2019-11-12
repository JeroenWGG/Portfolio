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
        { id: 14, name: "Design Thinking", number: "75" }
      ],
      marketing: [
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
        { id: 20, name: "Google Slides", number: "100" }
      ],
      talen: [
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
            <Col xs={12} sm={6}>
              <ZoomImg src="/img/AboutJeroen.png" />
              <p className="mt-4">
                Sinds ik ben afgestudeerd aan de opleiding Digitale media &
                communicatie ben ik werkzaam als Junior Conversie Manager bij
                een van de top 100 webshops van Nederland: plein.nl. Ik werk
                hier nauw samen met de IT-afdeling, omdat ik ook een technische
                achtergrond heb. Ik maak namelijk al sinds jongs af aan
                websites, als hobby maar ook voor kleine ondernemers. Ik heb
                hier ook cursussen over gevolgd tijdens mijn opleiding. Tijdens
                een gesprek met een van de Developers bij Plein.nl werd mijn
                interesse om Front-end Developer te worden weer aangewakkerd. Ik
                vind het ontzettend gaaf om te zien hoe ik mij op dit gebied nog
                kan ontwikkelen.
              </p>
              <p className="mt-4">
                Ik heb altijd aan projecten gewerkt waardoor ik gewend ben om
                snel oplossingen te verzinnen voor problemen. Ik heb veel kennis
                van HTML5, CSS & Javascript en heb ook nog ervaring met
                aanvullende technologieën. Tevens heb ik ervaring met het
                schrijven van responsive websites. Ik gebruik zelf Github voor
                persoonlijke projecten, maar dit heb ik nog niet gebruikt in
                teamverband. Ook heb ik een beetje ervaring met het ReactJS
                framework.
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
