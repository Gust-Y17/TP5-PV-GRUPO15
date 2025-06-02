import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/"><img src="../public/educacion.png" width={30} height={30} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="item-menu" href="/">Inicio</Nav.Link>
            <Nav.Link className="item-menu" href="/alumnos">Lista de Alumnos</Nav.Link>
            <Nav.Link className="item-menu" href="/nuevo-alumno">Nuevo Alumno</Nav.Link>
            <Nav.Link className="item-menu" href="/about">Acerca de</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
