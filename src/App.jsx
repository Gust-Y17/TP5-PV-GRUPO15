import { Routes, Route, data } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/NavBar";
import Home from './views/Home';
import About from './views/About';
import ListadoAlumnos from './views/ListadoAlumnos';
import NuevoAlumno from './views/NuevoAlumno';
import DetallesAlumno from './components/DetallesAlumno';
import "./styles/App.css";


const App = () => {
  const [alumnos, setAlumnos] = useState(() => {
    const datosGuardados = localStorage.getItem("alumnos");
    return datosGuardados ? JSON.parse(datosGuardados) : [];
  });

  const agregarAlumno = (nuevoAlumno) => {
    setAlumnos((prev) => [...prev, nuevoAlumno]);
  };

  useEffect(() => {
    localStorage.setItem("alumnos", JSON.stringify(alumnos));
  }, [alumnos]);

  const editarAlumno = (alumnoEditado) => {
    setAlumnos(alumnos.map((alumno) =>
      alumno.id === alumnoEditado.id ? alumnoEditado : alumno
    ));
  }

  const eliminarAlumno = (id) => {
    setAlumnos((prev) => prev.filter((alumno) => alumno.id !== id));
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alumnos" element={<ListadoAlumnos alumnos={alumnos} onEditar={editarAlumno} onEliminar={eliminarAlumno} />} />
        <Route path="/nuevo-alumno" element={<NuevoAlumno onAgregar={agregarAlumno} />} />
        <Route path="/about" element={<About />} />
        <Route path="/alumnos/:id" element={<DetallesAlumno alumnos={alumnos} onCerrar={() => setAlumnoSeleccionado(null)} />} />
      </Routes>
    </>
  );
};

export default App;