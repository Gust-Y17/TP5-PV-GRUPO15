import { useState } from "react";
import ItemAlumno from "./ItemAlumno"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
        <p>NO HAY ALUMNOS AGREGADOS POR EL MOMENTO</p>
      ) : (

        <Row>
            <h3>Lista de Alumnos</h3>
          {alumnos.map((alumno) => (
           
            <div key={alumno.id}>
              {alumnoAEditar?.id === alumno.id ? (
                <ItemAlumno
                alumno={alumnoAEditar}
                onGuardar={guardarEdicion}
                onCancelar={()=> setAlumnoAEditar(null)}
                />
              ) : (
                <div className="alumno">
                  <p><strong>Nombre:</strong> {alumno.nombre}</p>
                  <Col className="boton">
                    <button onClick={() => handleEditar(alumno)}>Editar</button>
                    <button onClick={() => onEliminar(alumno.id)}>Eliminar</button>
                    <button onClick={() => onVerDetalles(alumno.id)}>Ver Detalles</button>
                  </Col>
                </div>
                )}
            </div>
        ))}
        </Row>
    )}
  </Container>
);
};
export default ListAlumno;
