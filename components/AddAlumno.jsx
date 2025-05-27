import React, { useState } from 'react';

const AddAlumno = ({ onAgregar }) => {
  const [lu, setLu] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [curso, setCurso] = useState('');
  const [email, setEmail] = useState('');
  const [domicilio, setDomicilio] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAgregar({
      id: Date.now(), 
      lu, 
      nombre, 
      apellido, 
      curso, 
      email, 
      domicilio, 
      telefono
    });

    setLu('');
    setNombre('');
    setApellido('');
    setCurso('');
    setEmail('');
    setDomicilio('');
    setTelefono('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="LU" value={lu} onChange={(e) => setLu(e.target.value)} />
      <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <input type="text" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
      <input type="text" placeholder="Curso" value={curso} onChange={(e) => setCurso(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="Domicilio" value={domicilio} onChange={(e) => setDomicilio(e.target.value)} />
      <input type="tel" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default AddAlumno;
