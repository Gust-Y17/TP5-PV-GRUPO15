import { useState } from 'react';
import './App.css';
import AddAlumno from '../components/AddAlumno';
import ListAlumno from '../components/ListAlumno';
import DetallesAlumno from '../components/DetallesAlumno';

const App = () => {
  const [alumnos, setAlumnos] = useState([]);
  const [alumnoSeleccionado, setAlumnoSeleccionado] = useState(null);

  const agregarAlumno = (nuevoAlumno) => {
    setAlumnos([...alumnos, nuevoAlumno]);
  };

  return (
    <div>
      <h1>Gestión de Alumnos</h1>
      <AddAlumno onAgregar={agregarAlumno} />
      <ListAlumno
        alumnos={alumnos}
        onEditar={(alumno) => console.log('Editar', alumno)}
        onEliminar={(id) => console.log('Eliminar', id)}
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
    </div>
  );    
};

export default App;
