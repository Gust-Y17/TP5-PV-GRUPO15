import { useState } from "react";
const ItemAlumno = ({alumno, onGuardar, onCancelar}) => {

     const [DatEditado,setDatEditado] = useState({...alumno});

    const handlechange = (e) => {
        const {name,value} = e.target 
        setDatEditado({
            ...DatEditado,
            [name]:value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onGuardar(DatEditado)
    };

    return (
                   <div className="formulario-edicion">
                        <h4>Editando alumno...</h4>
                        <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="lu"
                            value={DatEditado.lu}
                            onChange={handlechange}
                            placeholder="LU:APU0009"
                        />
                        <input 
                            type="text"
                            name="nombre"
                            value={DatEditado.nombre}
                            onChange={handlechange}
                            placeholder="Nombre Alumno"
                        />
                        <input
                            type="text"
                            name="apellido"
                            value={DatEditado.apellido}
                            onChange={handlechange}
                            placeHolder="Apellido Alumno"
                        />                    
                        <input 
                            type="text"
                            name="curso"
                            value={DatEditado.curso}
                            onChange={handlechange}
                            placeHolder="Curso"
                        />
                        <input
                            type="email"
                            name="email"
                            value={DatEditado.email}
                            onChange={handlechange}
                            placeholder="Email"
                        />
                        <input
                            type="tel"
                            name="numeroTelefono"
                            value={DatEditado.numeroTelefono}
                            onChange={handlechange}
                            placeholder="Numero de Telefono"
                            pattern="[0-9]*"
                        />
                        <input
                        type="text"
                        name="domicilio"
                        value={DatEditado.domicilio}
                        onChange={handlechange}
                        placeholder="Domicilio"
                        />
                        <div className="botones-edicion">
                            <button type="submit">GUARDAR</button>
                            <button type="button" onClick={onCancelar}>CANCELAR</button>
                        </div>
                        </form>
                    </div>

     )
}
export default ItemAlumno;