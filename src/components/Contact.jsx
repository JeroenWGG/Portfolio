import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <h1 className="pt-4 pb-4">Contact</h1>
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
              <Form.Text className="text-muted">
                Ik probeer altijd binnen 3 werkdagen te reageren op vragen.git
              </Form.Text>
              <Button variant="primary" type="submit" size="lg" block>
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={12} lg={6}>
            <Image className="contactImage" src="/img/uitsnedenklein.png" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
