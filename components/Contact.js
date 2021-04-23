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
import styles from '../less/Contact.less';
import emailjs from 'emailjs-com';

const SocialMediaIcon = props => {
  const { url, img } = props;
  return (
    <div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={img} className="socialMediaImg" />
      </a>
    </div>
  );
};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
    this.state = {
      from_name: "",
      from_email: "",
      message: "",
      submitted: false
    };
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.EMAILJS_USER_ID
      ) 
      .then(res => {
        console.log(res.text);
      }, err => {
        console.log(err.text);
      });

    this.setState({
      from_name: "",
      from_email: "",
      message: "",
      submitted: true
    });
  };

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
        </p><br/>

        <Row>
          <Col lg="6" className="text-center py-2">
            <h4 className="py-4">Get to know me by visiting my social media</h4>
            <Row>
              <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                <SocialMediaIcon
                  url={"https://www.facebook.com/chris.d.3150"}
                  img={"../www/img/Facebook-Emblem.png"}
                />
              </Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                <SocialMediaIcon
                  url={"https://www.instagram.com/virtuoso_lume/"}
                  img={"../www/img/Instagram-Emblem.png"}
                />
              </Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                <SocialMediaIcon
                  url={"https://www.youtube.com/channel/UCj8pYnnOtWp5OKHzVOh0R3A"}
                  img={"../www/img/YouTube-Emblem.png"}
                />
              </Col>
            </Row>
          </Col>

          <Col lg="6" className="text-center py-2">
            <h4 className="py-4">Contact me directly by filling out this form</h4>
            <Form onSubmit={this.sendEmail}>
              <FormGroup>
                <Input
                  type="text"
                  name="from_name"
                  onChange={this.handleChange}
                  value={this.state.from_name}
                  required
                  placeholder="Name"
                />
              </FormGroup>

              <FormGroup>
                <Input
                  type="text"
                  name="from_email"
                  onChange={this.handleChange}
                  value={this.state.from_email}
                  required
                  placeholder="Email"
                />
              </FormGroup>

              <FormGroup>
                <Input
                  type="textarea"
                  name="message"
                  onChange={this.handleChange}
                  value={this.state.message}
                  required
                  placeholder="Message"
                />
              </FormGroup>

              <FormGroup>
                {
                  !this.state.submitted ?
                  <Button block color="primary">
                    Email Me
                  </Button> :
                  <Alert className="msgSentAlert">
                    Message Sent
                  </Alert>
                }
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  };
};

export default Contact;