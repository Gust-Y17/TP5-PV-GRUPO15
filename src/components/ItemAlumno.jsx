import { useState } from "react";
import Button from 'react-bootstrap/Button'
const ItemAlumno = ({ alumno, onGuardar, onCancelar, }) => {

  const [DatEditado, setDatEditado] = useState({ ...alumno });

  const handlechange = (e) => {
    const { name, value } = e.target
    setDatEditado({
      ...DatEditado,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }
    onGuardar(DatEditado)

  };

  return (
    <div className="formulario-edicion">
      <h4>Editando alumno...</h4>
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <input
          type="text"
          name="lu"
          value={DatEditado.lu}
          className="form-control"
          onChange={handlechange}
          placeholder="LU:APU0009"
        />
        <input
          type="text"
          name="nombre"
          value={DatEditado.nombre}
          className="form-control"
          onChange={handlechange}
          pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$"
          placeholder="Nombre Alumno"
        />
        <input
          type="text"
          name="apellido"
          value={DatEditado.apellido}
          className="form-control"
          onChange={handlechange}
          pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$"
          placeHolder="Apellido Alumno"
        />
        <input
          type="text"
          name="curso"
          value={DatEditado.curso}
          className="form-control"
          onChange={handlechange}
          pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$"
          placeHolder="Curso"
        />
        <input
          type="email"
          name="email"
          value={DatEditado.email}
          className="form-control"
          onChange={handlechange}
          placeholder="Email"
        />
        <input
          type="tel"
          name="numeroTelefono"
          value={DatEditado.numeroTelefono}
          className="form-control"
          onChange={handlechange}
          placeholder="Numero de Telefono"
          pattern="[0-9]*"
        />
        <input
          type="text"
          name="domicilio"
          value={DatEditado.domicilio}
          className="form-control"
          onChange={handlechange}
          placeholder="Domicilio"
        />
        <div className="botones-edicion">
          <Button variant="primary" type="submit">GUARDAR</Button>
          <Button variant="danger" type="button" onClick={onCancelar}>CANCELAR</Button>
        </div>
      </form>
    </div>

  )
}
export default ItemAlumno;