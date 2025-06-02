import { useState } from "react";
import { Link } from "react-router-dom";
import ItemAlumno from "./ItemAlumno";

const ListAlumno = ({ alumnos, onEditar, onEliminar }) => {
  const [alumnoAEditar, setAlumnoAEditar] = useState(null);

  const handleEditar = (alumno) => {
    setAlumnoAEditar(alumno);
  };

  const guardarEdicion = (alumnoEditado) => {
    onEditar(alumnoEditado);
    setAlumnoAEditar(null);
  };

  return (
    <>
      {alumnos.length === 0 ? (
        <p>NO HAY ALUMNOS AGREGADOS POR EL MOMENTO</p>
      ) : (
        alumnos.map((alumno) => (
          <div key={alumno.id}>
            <h3>{alumno.nombre} {alumno.apellido}</h3>

            {alumnoAEditar?.id === alumno.id ? (
              <ItemAlumno
                alumno={alumnoAEditar}
                onGuardar={guardarEdicion}
                onCancelar={() => setAlumnoAEditar(null)}
              />
            ) : (
              <div>
                <button onClick={() => handleEditar(alumno)}>Editar</button>
                <button onClick={() => onEliminar(alumno.id)}>Eliminar</button>
                <Link to={`/alumnos/${alumno.id}`}>
                  <button>Ver Detalles</button>
                </Link>
              </div>
            )}
          </div>
        ))
      )}
    </>
  );
};

export default ListAlumno;
