import React, { useState } from "react";
import ItemAlumno from "./ItemAlumno"
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
    <div>
      <h3>Lista de Alumnos</h3>

      {alumnos.length === 0 ? (
        <p>No hay alumnos.</p>
      ) : (
        <div>
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
                <p><strong>Edad:</strong> {alumno.edad}</p>
                <div className="boton">
                  <button onClick={() => handleEditar(alumno)}>Editar</button>
                  <button onClick={() => onEliminar(alumno.id)}>Eliminar</button>
                  <button onClick={() => onVerDetalles(alumno.id)}>Ver Detalles</button>
                </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )};
  </div>
);
};
export default ListAlumno;
