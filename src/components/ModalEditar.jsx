import { Modal, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

const ModalEditar = ({ show, handleClose, alumno, onGuardar }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (alumno) {
      setFormData(alumno);
    }
  }, [alumno]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onGuardar(formData);
    handleClose();
  };

  if (!alumno) return null;

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Editar Alumno</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>LU</Form.Label>
            <Form.Control type="text" name="lu" value={formData.lu || ""} onChange={handleChange} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" name="nombre" value={formData.nombre || ""} onChange={handleChange} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" name="apellido" value={formData.apellido || ""} onChange={handleChange} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Curso</Form.Label>
            <Form.Control type="text" name="curso" value={formData.curso || ""} onChange={handleChange} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={formData.email || ""} onChange={handleChange} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Domicilio</Form.Label>
            <Form.Control type="text" name="domicilio" value={formData.domicilio || ""} onChange={handleChange} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Teléfono</Form.Label>
            <Form.Control type="tel" name="numeroTelefono" value={formData.numeroTelefono || ""} onChange={handleChange} />
          </Form.Group>

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
        <Button variant="primary" onClick={handleSubmit}>Guardar Cambios</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEditar;
