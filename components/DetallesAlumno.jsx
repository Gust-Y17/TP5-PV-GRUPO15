import React from "react";

const DetallesAlumno = ({ alumno, onCerrar }) => {
    if (!alumno) return null;

    return (
        <div className="detalles-alumno">
            <h2>Detalles del Alumno</h2>
            <p><strong>LU:</strong> {alumno.lu}</p>
            <p><strong>Nombre:</strong> {alumno.nombre}</p>
            <p><strong>Apellido:</strong> {alumno.apellido}</p>
            <p><strong>Curso:</strong> {alumno.curso}</p>
            <p><strong>Email:</strong> {alumno.email}</p>
            <p><strong>Domicilio:</strong> {alumno.domicilio}</p>
            <p><strong>Teléfono:</strong> {alumno.telefono}</p>
            <button onClick={onCerrar}>Cerrar</button>
        </div>
    );
};

export default DetallesAlumno;
