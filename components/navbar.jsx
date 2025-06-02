import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavMarkup" aria-controls="navbarNavMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/agregar-alumno">Agregar Alumno</Link>
            <Link className="nav-link" to="/lista-alumnos">Lista Alumnos</Link>
            <Link className="nav-link" to="/local-lista-alumnos">Lista Local</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
