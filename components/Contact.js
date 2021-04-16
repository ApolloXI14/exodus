import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert
} from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from '../less/Contact.less';

class Contact extends Component {
  render() {
    return (
      <Container fluid id="contactCompDiv" className="pt-3 p-5">
        <h1 className="pb-4">Contact</h1>

        <p>
          Exodus has been in development by myself and my brothers for over ten years.
          At the time, I felt both my writing and artistic skills lacked too much to
          properly publish Exodus the way we wanted to.
          During development however, people kept asking us about the project with
          growing interest because they wanted to have "characters in the story".
          As more and more people inquired, my enthusiasm grew.
          Overtime, my love for roleplay along with the curse of forever-DMing
          blended in with our comic plans.
          This led us to evolve Exodus into a universal roleplaying experience that not
          even I could have imagined.
        </p>

        <Row>
          <Col lg="6">
            <h4 className="py-4">Get to know me by visiting my social media</h4>
            <Row>
              <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                <a href="https://www.facebook.com/chris.d.3150" target="_blank" rel="noopener noreferrer">
                  <img src="../www/img/Facebook-Emblem.png" alt="Facebook" className="socialMediaImg" />
                </a>
              </Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                <a href="https://www.instagram.com/virtuoso_lume/" target="_blank" rel="noopener noreferrer">
                  <img src="../www/img/Instagram-Emblem.png" alt="Instagram" className="socialMediaImg" />
                </a>
              </Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                <a href="https://www.youtube.com/channel/UCj8pYnnOtWp5OKHzVOh0R3A" target="_blank" rel="noopener noreferrer">
                  <img src="../www/img/YouTube-Emblem.png" alt="YouTube" className="socialMediaImg" />
                </a>
              </Col>
            </Row>
          </Col>

          <Col lg="6">
            <h4 className="py-4">Or contact me directly by filling out this form</h4>
            <Form onSubmit={() => console.log("Form Submitted")}>
              <FormGroup row>
                <Label for="from_name" sm={2}>Name</Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="from_name"
                    // onChange={this.handleChange}
                    // value={this.state.from_name}
                    required
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="from_email" sm={2}>Email</Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="from_email"
                    // onChange={this.handleChange}
                    // value={this.state.from_email}
                    required
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="message" sm={2}>Message</Label>
                <Col sm={10}>
                  <Input
                    type="textarea"
                    name="message"
                    // onChange={this.handleChange}
                    // value={this.state.message}
                    required
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col sm={10}>
                  <Button color="primary">
                    Send Email
                  </Button>
                </Col>
              </FormGroup>

              {/* <FormGroup row>
                <Col sm={10}>
                  {
                    !this.state.submitted ?
                    <Button color="primary">
                      Send Email
                    </Button> :
                    <Alert color="success" style={styles.alert}>
                      Message Sent!
                    </Alert>
                  }
                </Col>
              </FormGroup> */}
            </Form>
          </Col>
        </Row>
      </Container>
    );
  };
};

export default Contact;