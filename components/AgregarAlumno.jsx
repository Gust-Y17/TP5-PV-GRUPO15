import React, { useState } from 'react';

const agregarAlumno = ({ onAgregar }) => {
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
    <form onSubmit={handleSubmit} className="container mt-4">
      {/* LU arriba */}
      <div className="form-group">
        <label>LU</label>
        <input
          type="text"
          className="form-control"
          value={lu}
          onChange={(e) => setLu(e.target.value)}
        />
      </div>

      {/* Nombre y Apellido en la misma fila */}
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Apellido</label>
          <input
            type="text"
            className="form-control"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
      </div>

      {/* Curso, Domicilio, Teléfono y Email en sus posiciones */}
      <div className="form-group">
        <label>Curso</label>
        <input
          type="text"
          className="form-control"
          value={curso}
          onChange={(e) => setCurso(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Domicilio</label>
        <input
          type="text"
          className="form-control"
          value={domicilio}
          onChange={(e) => setDomicilio(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Teléfono</label>
        <input
          type="tel"
          className="form-control"
          pattern="[0-9]*"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">Agregar</button>
    </form>
  );
};

export default agregarAlumno;
