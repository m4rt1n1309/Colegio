import '../style/login.css'
import { useState } from 'react';
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';


function LoginFunction() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  

  const handleChangeEmail = (e)=>{
    setEmail(e.target.value);
  }

  const handleChangePassword = (e)=> {
    setPassword(e.target.value);
  }

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e)=>{
    
    
    //prever que se refresque la pagina
    e.preventDefault();

    setFormSubmitted(true); // Marcar el formulario como enviado

    const validarEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const resultadoValidacion = validarEmail.test(email);
    

    //validaciones
    if (!email || !password) {
      console.log("campos vacios")
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El correo ingresado o la contraseña son incorrectas",
      });
    }
    else if (!resultadoValidacion){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El correo ingresado o la contraseña son incorrectas",
      });
    }
    else if(password.length < 6){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El correo ingresado o la contraseña son incorrectas",
      });
    }
  }


  return (
    <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
      
      
    <div className='login rounded'>
        <h2 className=' text-center mb-3'>Inicio</h2>
        <form className={`needs-validation ${isFormSubmitted ? 'was-validated' : ''}`} onSubmit={handleSubmit}>
          
        <div className='form-group was-validated mb-2'>
            <label htmlFor="email" className='form-label'>Ingrese su e-mail</label>
            <input type="email" className='form-control' onChange={handleChangeEmail} value={email} required ></input>
            <div className='invalid-feedback'>
              Por favor ingrese su e-mail
            </div>
        </div>
        <div className='form-group was-validated mb-2'>
            <label htmlFor="password" className='form-label'>Contraseña</label>
            <input type={showPassword ? 'text' : 'password'} className='form-control' onChange={handleChangePassword} required ></input>
            <div className='invalid-feedback'>
              Por favor ingrese Contraseña
            </div>
            <button type="button" className="mostrarpass btn btn-link" onClick={handleTogglePassword}>
              {showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            </button>
        </div>
        <div className='form-group form-check mb-2'>
            <input type="checkbox" className='form-check-input'></input>
            <label htmlFor="check" className='form-check-label'>Recuerdame</label>
        </div>
        <button type='submit' className='btn w-100 mt-2 colourbutton'>Iniciar Sesion </button>
        </form>
      </div>
    </div>
    
  );
}

export default LoginFunction;