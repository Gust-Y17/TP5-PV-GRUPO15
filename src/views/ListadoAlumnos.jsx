import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ModalConfirmacion from "../components/ModalDeConfirmacion";
import ModalDeDetalles from "../components/ModalDeDetalles";
import ModalEditar from "../components/ModalEditar";
import "../styles/ListadoAlumnos.css";

const ListadoAlumnos = ({ alumnos, onEditar, onEliminar }) => {
  const [showModalEliminar, setShowModalEliminar] = useState(false);
  const [showModalDetalles, setShowModalDetalles] = useState(false);
  const [showModalEditar, setShowModalEditar] = useState(false);
  const [alumnoSeleccionado, setAlumnoSeleccionado] = useState(null);

  const abrirModalEliminar = (alumno) => {
    setAlumnoSeleccionado(alumno);
    setShowModalEliminar(true);
  };

  const cerrarModalEliminar = () => {
    setShowModalEliminar(false);
    setAlumnoSeleccionado(null);
  };

  const confirmarEliminacion = () => {
    onEliminar(alumnoSeleccionado.id);
    cerrarModalEliminar();
  };

  const abrirModalDetalles = (alumno) => {
    setAlumnoSeleccionado(alumno);
    setShowModalDetalles(true);
  };

  const cerrarModalDetalles = () => {
    setShowModalDetalles(false);
    setAlumnoSeleccionado(null);
  };

  const abrirModalEditar = (alumno) => {
    setAlumnoSeleccionado(alumno);
    setShowModalEditar(true);
  };

  const cerrarModalEditar = () => {
    setShowModalEditar(false);
    setAlumnoSeleccionado(null);
  };

  const guardarEdicion = (alumnoEditado) => {
    onEditar(alumnoEditado);
    cerrarModalEditar();
  };

  return (
    <Container className="listado-alumnos-container">
      <Row>
        {alumnos.map((alumno) => (
          <Col key={alumno.id} md={4} className="mb-4">
            <Card className="tarjeta-alumno">
              <Card.Img variant="top" src="../public/estudiante.png" />
              <Card.Body>
                <Card.Title>{alumno.nombre} {alumno.apellido}</Card.Title>
                <Card.Text>
                  <strong>Curso:</strong> {alumno.curso} <br />
                  <strong>Email:</strong> {alumno.email}
                </Card.Text>
                <div className="boton">
                  <Button variant="warning" onClick={() => abrirModalDetalles(alumno)}>Ver Detalles</Button>
                  <Button variant="primary" onClick={() => abrirModalEditar(alumno)}>Editar</Button>
                  <Button variant="danger" onClick={() => abrirModalEliminar(alumno)}>Eliminar</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <ModalConfirmacion show={showModalEliminar} handleClose={cerrarModalEliminar} handleConfirm={confirmarEliminacion} />
      <ModalDeDetalles show={showModalDetalles} handleClose={cerrarModalDetalles} alumno={alumnoSeleccionado} />
      <ModalEditar show={showModalEditar} handleClose={cerrarModalEditar} alumno={alumnoSeleccionado} onGuardar={guardarEdicion} />
    </Container>
  );
};

export default ListadoAlumnos;
