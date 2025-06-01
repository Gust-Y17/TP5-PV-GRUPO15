import { useState } from "react";
import ItemAlumno from "./ItemAlumno"
import {Container,Button,Card,Col,Row} from "react-bootstrap";
 

const ListAlumno = ({ alumnos, onEditar, onEliminar, onVerDetalles }) => {
const [alumnoAEditar,setAlumnoAEditar] = useState (null)

const handleEditar = (alumno) => {
  setAlumnoAEditar(alumno)
}

const guardarEdicion = (alumnoAEditar) => {
  onEditar(alumnoAEditar)
  setAlumnoAEditar(null)
}
  
  return (
    <Container>
      {alumnos.length === 0 ? (
        <p>No hay alumnos.</p>
      ) : (
        <Row>
          {alumnos.map((alumno) => (
            <Col key={alumno.id}>
              <Card>
                
               
              {alumnoAEditar?.id === alumno.id ? (
                <ItemAlumno
                alumno={alumnoAEditar}
                onGuardar={guardarEdicion}
                onCancelar={()=> setAlumnoAEditar(null)}
                />
              ) : (
                <Card.Body className="tarjetas">
                  <Card.Img variant="top" src="../src/assets/blue-profile-icon-free-png.webp"/>
                 <Card.Title><strong>NOMBRE: </strong>{alumno.nombre}</Card.Title>
                <div className="boton">
                  <Button variant="success"onClick={() => handleEditar(alumno)}>Editar</Button>
                  <Button variant="danger"onClick={() => onEliminar(alumno.id)}>Eliminar</Button>
                  <Button variant="warning"onClick={() => onVerDetalles(alumno.id)}>Ver Detalles</Button>
                </div>        

          </Card.Body>
          )}
          </Card>
        </Col>
      ))}
    </Row>
  )};
  </Container>
);
};
export default ListAlumno;
