import '../style/login.css'
import { useState } from 'react';

function LoginFunction() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e)=>{
    setEmail(e.target.value);
    console.log(e.target.value);
  }

  const handleChangePassword = (e)=> {
    setPassword(e.target.value);
    console.log(e.target.value);
  }

  const handleSubmit = (e)=>{
    //prever que se refresque la pagina
    e.preventDefault();
    console.log('Submit event triggered');
    console.log('Email:', email);
    console.log('Password:', password);

    //validaciones
    if (!email.trim || !password.trim) {
      alert('Por favor, complete todos los campos.');
      return;
    }
  }



  return (
    <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
    <div className='login rounded'>
        <h2 className=' text-center mb-3'>Inicio</h2>
        <form className='needs-validation' onSubmit={handleSubmit}>
        <div className='form-group was-validated mb-2'>
            <label htmlFor="email" className='form-label'>Ingrese su e-mail</label>
            <input type="email" className='form-control' onChange={handleChangeEmail} value={email} required ></input>
            <div className='invalid-feedback'>
              Por favor ingrese su e-mail
            </div>
        </div>
        <div className='form-group was-validated mb-2'>
            <label htmlFor="password" className='form-label'>Contraseña</label>
            <input type="password" className='form-control' onChange={handleChangePassword} required ></input>
            <div className='invalid-feedback'>
              Por favor ingrese Contraseña
            </div>
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