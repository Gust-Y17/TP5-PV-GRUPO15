
import { useState } from 'react';
import Button from 'react-bootstrap/Button'

const AgregarAlumno = ({ onAgregar }) => {
  const [lu, setLu] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [curso, setCurso] = useState('');
  const [email, setEmail] = useState('');
  const [domicilio, setDomicilio] = useState('');
  const [numeroTelefono, setTelefono] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form =e.target;
    if (!form.checkValidity()){
      form.classList.add('was-validated'); //muestra visualmente los errores
      return;
    }
     
      onAgregar({
        id: Date.now(), 
        lu, 
        nombre, 
        apellido, 
        curso, 
        email, 
        domicilio, 
        numeroTelefono
      });
  
      setLu('');
      setNombre('');
      setApellido('');
      setCurso('');
      setEmail('');
      setDomicilio('');
      setTelefono('');
      form.classList.remove('was-validated') //quita la validacion en estado negativa
    };

  return (
    <form onSubmit={handleSubmit} className='needs-validation' noValidate> 
          <input 
          type="text" 
          required 
          className="form-control" 
          placeholder="LU" 
          value={lu}
         onChange={(e) => setLu(e.target.value)} />
         
          <input 
          type="text" 
          required 
          className="form-control" 
          pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$" 
          placeholder="Nombre" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} />

          <input 
          type="text" 
          required 
          className="form-control" 
          pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$" 
          placeholder="Apellido" 
          value={apellido} 
          onChange={(e) => setApellido(e.target.value)} />

          <input 
          type="text" 
          required 
          className="form-control" 
          pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$" 
          placeholder="Curso"
          value={curso} 
          onChange={(e) => setCurso(e.target.value)} />

          <input 
          type="email" 
          required 
          className="form-control" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} />


          <input 
          type="text" 
          required
          className="form-control"  
          placeholder="Domicilio" 
          value={domicilio} 
          onChange={(e) => setDomicilio(e.target.value)} />
          <input 
          type="tel" 
          required 
          className="form-control" 
          placeholder="Teléfono"
          value={numeroTelefono} 
          pattern="[0-9]{9,}" 
          onChange={(e) => setTelefono(e.target.value)} />
          
          <Button variant="primary"type="submit">Agregar</Button>
    </form>
  );
};

export default AgregarAlumno;
