import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/Home.css";
import Carousel from 'react-bootstrap/Carousel';

function Home () {
  return (
    <Container className="home-container">
      <Row>
        <Col sm={15} lg={15}>
       <h1 className="home-title">Bienvenidos a la página del grupo 15!</h1>
       <Col sm={13} md={13} lg={13} >
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
           <img
             className="d-block w-100"
             src="public\imgcarucel3.png"
             alt="First slide"
           />
           <Carousel.Caption>
           <h4>SOMOS UN GRUPO DE DESARROLLADORES WEB</h4>
           </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
           <img
            className="d-block w-100"
            src="public\imgcarucel2.png"
            alt="Second slide"
           />
            <Carousel.Caption>
             <h4>MANTENEMOS VIVA SU PAGINA</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
             className="d-block w-100"
             src="public\imgcarucel1.png"
             alt="Third slide"
            />
            <Carousel.Caption>
             <h4>GRACIAS LA IA POR AYUDARNOS  </h4>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
       </Col> 
    </Col>
    </Row>
    </Container>
  )
}

export default Home;