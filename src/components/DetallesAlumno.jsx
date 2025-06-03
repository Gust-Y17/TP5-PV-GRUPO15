import { useParams } from "react-router";

const DetallesAlumno = ({ alumnos, onCerrar }) => {
  const { id } = useParams();
  const alumno = alumnos.find((al) => al.id === Number(id));

  if (!alumno) return <p>Alumno no encontrado</p>;

  return (
    <div className="detalles-alumno">
      <h2>Detalles del Alumno</h2>
      <p><strong>LU:</strong> {alumno.lu}</p>
      <p><strong>Nombre:</strong> {alumno.nombre}</p>
      <p><strong>Apellido:</strong> {alumno.apellido}</p>
      <p><strong>Curso:</strong> {alumno.curso}</p>
      <p><strong>Email:</strong> {alumno.email}</p>
      <p><strong>Domicilio:</strong> {alumno.domicilio}</p>
      <p><strong>Teléfono:</strong> {alumno.numeroTelefono}</p>
      <button onClick={onCerrar}>Cerrar</button>
    </div>
  );
};

export default DetallesAlumno;
