import React, { useState } from 'react';

const AddAlumno = ({ onAgregar }) => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAgregar({ id: Date.now(), nombre, edad });
    setNombre('');
    setEdad('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="number"
        placeholder="Edad"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default AddAlumno;