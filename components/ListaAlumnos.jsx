import React from 'react';

const ListaAlumno = ({ alumnos }) => {
  return (
    <div>
      <h1>¡Hola! Funciona</h1>
      <p>Cantidad de alumnos: {alumnos ? alumnos.length : 0}</p>
    </div>
  );
};

export default ListaAlumno;
