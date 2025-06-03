import AgregarAlumno from "../components/AgregarAlumno";
import "../styles/AgregarAlumno.css";

const NuevoAlumno = ({ onAgregar }) => {
  return (
    <div>
      <h1 className="titulo">Registrar un nuevo alumno</h1>
      <AgregarAlumno onAgregar={onAgregar} />
    </div>
  );
};

export default NuevoAlumno;