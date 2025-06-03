import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/About.css";

const About = () => {
  return (
    <Container className="about-container">
      <h1>Sobre el Grupo 15</h1>

      <Row className="justify-content-center">
        <Col md={2}>
          <Card className="team-card">
            <Card.Img variant="top" src="../public/blue-profile.webp" />
            <Card.Body>
              <Card.Title>AARON MERILES</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col md={2}>
          <Card className="team-card">
            <Card.Img variant="top" src="../public/blue-profile.webp" />
            <Card.Body>
              <Card.Title>JUAN PONZETTI</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col md={2}>
          <Card className="team-card">
            <Card.Img variant="top" src="../public/blue-profile.webp" />
            <Card.Body>
              <Card.Title>GUSTAVO YEVARA</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col md={2}>
          <Card className="team-card">
            <Card.Img variant="top" src="../public/blue-profile.webp" />
            <Card.Body>
              <Card.Title>URIEL ZAMBRANO</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col md={2}>
          <Card className="team-card">
            <Card.Img variant="top" src="../public/blue-profile.webp" />
            <Card.Body>
              <Card.Title>FELIPE QUIROGA</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
