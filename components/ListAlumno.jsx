import React from "react";
const ListAlumno = ({ alumnos, onEditar, onEliminar, onVerDetalles }) => {
  return (
    <div>
      <h3>Lista de Alumnos</h3>
      {alumnos.length === 0 ? (
        <p>No hay alumnos.</p>
      ) : (
        <div>
          {alumnos.map((alumno) => (
            <div className="alumno" key={alumno.id} >
              <p><strong>Nombre:</strong> {alumno.nombre}</p>
              <p><strong>Edad:</strong> {alumno.edad}</p>
              <div className="boton">
                <button onClick={() => onEditar(alumno)}>Editar</button>
                <button onClick={() => onEliminar(alumno.id)}>Eliminar</button>
                <button onClick={() => onVerDetalles(alumno.id)}>Ver Detalles</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default ListAlumno;