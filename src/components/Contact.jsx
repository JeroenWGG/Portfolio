import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Title from "./Title";
import Breadcrumbs from "./Breadcrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

class Contact extends Component {
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
          link: "/contact",
          name: "Contact"
        }
      ]
    };
  }

  render() {
    return (
      <div className="react-transition fade-in">
        <Breadcrumbs data={this.state.breadcrumbs} />
        <Title name="Contact" />
        <Container>
          <Row className="pb-2">
            <Col className="contactDetails">
              <p>
                Leuk dat je mijn portfolio heb bekeken! Hieronder staan een
                aantal manieren om contact met mij op te nemen. Ik probeer
                binnen 24 uur op mailtjes te reageren. Bellen kan natuurlijk
                ook!
              </p>
            </Col>
          </Row>
        </Container>
        <div className="greyContainer pt-4">
          <Container>
            <Row>
              <Col lg={6} className="contactDetails">
                {" "}
                <div>
                  <FontAwesomeIcon className="mr-4" icon={faEnvelope} />
                  <a href="mailto:info@jeroenwiersma.com">
                    info@jeroenwiersma.com
                  </a>
                </div>
                <div>
                  <br></br> <FontAwesomeIcon className="mr-4" icon={faPhone} />
                  0616483780<br></br>
                  <br></br>
                </div>
                <div>
                  <FontAwesomeIcon className="mr-4" icon={faLinkedin} />
                  <a
                    className="links"
                    href="https://www.linkedin.com/in/jeroen-wiersma-840748120/"
                  >
                    Jeroen Wiersma
                  </a>
                </div>
              </Col>
              <Col md={12} lg={6} className="mt-4">
                <Image className="contactImage" src="/img/uitsnedenklein.png" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Contact;
