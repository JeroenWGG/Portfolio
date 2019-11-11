import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Title from "./Title";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Title name="Contact" />
        <Container>
          <Row>
            <Col>
              <p>
                Vestibulum tellus ante, ultrices quis laoreet ac, lobortis et
                turpis. Curabitur lacinia eget justo eget rhoncus. Vestibulum
                posuere rutrum lorem, ut congue massa. Donec vitae posuere
                ipsum. Sed vulputate diam nec dignissim imperdiet. Suspendisse
                sit amet scelerisque sapien, id laoreet lorem. Nulla id urna at
                urna placerat euismod nec sed ligula. Nunc laoreet, ex sed
                laoreet rhoncus, ex augue vulputate dui, vel interdum metus arcu
                ac ante. Donec eros dui, condimentum sit amet commodo vitae,
                ultrices sed dolor. Ut elementum ipsum eu risus blandit
                sagittis. Aliquam aliquam, lorem sit amet iaculis porta, odio
                quam vestibulum turpis, id gravida massa odio a mi. Fusce
                scelerisque fermentum laoreet. Etiam pulvinar mollis lorem quis
                varius.
              </p>
            </Col>
          </Row>
        </Container>
        <div className="greyContainer pt-4">
          <Container>
            <Row>
              <Col>
                <Form>
                  <Form.Group controlId="formBasicFirstName">
                    <Form.Label>Voornaam</Form.Label>
                    <Form.Control type="text" placeholder="Voornaam" />
                  </Form.Group>
                  <Form.Group controlId="formBasicLastName">
                    <Form.Label>Achternaam</Form.Label>
                    <Form.Control type="text" placeholder="Achternaam" />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Bericht</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="5"
                      placeholder="Voer hier je bericht in..."
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" size="lg" block>
                    Submit
                  </Button>
                </Form>
              </Col>
              <Col md={12} lg={6} className="mt-4">
                <Image className="contactImage" src="/img/uitsnedenklein.png" />
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
