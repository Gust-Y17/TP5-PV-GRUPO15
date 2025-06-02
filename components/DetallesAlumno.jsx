import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";

const DetallesAlumno = ({ alumno, onCerrar }) => {
    if (!alumno) return null;

    return (
        <Container className="detalles-alumno">
            <Row>
                <Col>
                <h2>Detalles del Alumno</h2>
                <p><strong>LU:</strong> {alumno.lu}</p>
                <p><strong>Nombre:</strong> {alumno.nombre}</p>
                <p><strong>Apellido:</strong> {alumno.apellido}</p>
                <p><strong>Curso:</strong> {alumno.curso}</p>
                <p><strong>Email:</strong> {alumno.email}</p>
                <p><strong>Domicilio:</strong> {alumno.domicilio}</p>
                <p><strong>Teléfono:</strong> {alumno.numeroTelefono}</p>
            <Button onClick={onCerrar}>Cerrar</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default DetallesAlumno;
