import { Row, Col, Container } from "react-bootstrap";
import profilePic from "../assets/images/Profilepic.png";

function About() {
  return (
    <section className="about" id="about">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={5} xl={5}>
            <img src={profilePic} alt="Profile-Pic" className="profilePic" />
          </Col>
          <Col xs={12} md={7} xl={7}>
            <h1>About Me</h1>
            <p>I'm Erjill, A fellow of the Higher Education Academy, currently teaching BSc and MSc Computer Science at Royal Holloway, University of London</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
