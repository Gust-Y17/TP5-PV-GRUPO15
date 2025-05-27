import { useState } from 'react'
import './App.css';
import AddAlumno from '../components/AddAlumno';
import ListAlumno from '../components/ListAlumno';

const App = () => {
  const [alumnos, setAlumnos] = useState([]);

  const agregarAlumno = (nuevoAlumno) => {
    setAlumnos([...alumnos, nuevoAlumno]);
  };
  const editarAlumno = (alumnoEditado) => {
    setAlumnos(alumnos.map(alumno => 
      alumno.id === alumnoEditado.id ? alumnoEditado : alumno
    ));
  };

  return (
    <div>
      <h1>Gestión de Alumnos</h1>
      <AddAlumno onAgregar={agregarAlumno} />
      <ListAlumno
        alumnos={alumnos}
        onEditar={editarAlumno}
        onEliminar={(id) => console.log('Eliminar', id)}
        onVerDetalles={(id) => console.log('Ver Detalles', id)}
      />
    </div>
  );    
};
export default App;