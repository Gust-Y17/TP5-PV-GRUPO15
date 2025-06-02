import { Modal, Button } from "react-bootstrap";

const ModalConfirmacion = ({ show, handleClose, handleConfirm }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirmar eliminación</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>¿Estás seguro de que deseas eliminar este alumno?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
        <Button variant="danger" onClick={handleConfirm}>Eliminar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalConfirmacion;
