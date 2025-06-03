import { Modal, Button } from "react-bootstrap";

const ModalDetalles = ({ show, handleClose, alumno }) => {
  if (!alumno) return null;

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Detalles de {alumno.nombre} {alumno.apellido}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>LU:</strong> {alumno.lu}</p>
        <p><strong>Curso:</strong> {alumno.curso}</p>
        <p><strong>Email:</strong> {alumno.email}</p>
        <p><strong>Domicilio:</strong> {alumno.domicilio}</p>
        <p><strong>Teléfono:</strong> {alumno.numeroTelefono}</p>
      </Modal.Body>
    </Modal>
  );
};

export default ModalDetalles;
