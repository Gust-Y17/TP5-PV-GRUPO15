import { useState } from 'react';
import './App.css';
import AgregarAlumno from '../components/AgregarAlumno';
import ListAlumno from '../components/ListAlumno';
import DetallesAlumno from '../components/DetallesAlumno';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {
  const [alumnos, setAlumnos] = useState([]);
  const [alumnoSeleccionado, setAlumnoSeleccionado] = useState(null);

  const agregarAlumno = (nuevoAlumno) => {
    setAlumnos([...alumnos, nuevoAlumno]);
  };
  const editarAlumno = (alumnoEditado) => {
    setAlumnos(alumnos.map(alumno => 
      alumno.id === alumnoEditado.id ? alumnoEditado : alumno
    ));
  };
   const eliminarAlumno = (id) => {
    setAlumnos(alumnos.filter(alumno => alumno.id !== alumno.id)) 
   }


  return (
    <Container>
      <Row>
        <Col>
          <h1>Gestión de Alumnos</h1>
        </Col>
      </Row>

      <AgregarAlumno onAgregar={agregarAlumno} />
      <ListAlumno
        alumnos={alumnos}
        onEditar={editarAlumno}
        onEliminar={eliminarAlumno}
        onVerDetalles={(id) => {
          const alumno = alumnos.find((al) => al.id === id);
          console.log('Alumno seleccionado:', alumno);
          setAlumnoSeleccionado(alumno);
        }}
      />
      
      {alumnoSeleccionado && (
        <DetallesAlumno
          alumno={alumnoSeleccionado}
          onCerrar={() => setAlumnoSeleccionado(null)}
        />
      )}
    </Container>
  );    
};

export default App;
