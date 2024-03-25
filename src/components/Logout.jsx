import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../style/ppprincipal.css"

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Eliminar el token del almacenamiento local
    localStorage.removeItem('token');
    // Redirigir a la página de inicio de sesión
    navigate('/');
  };

  return (
    <div className="contenedor-boton">
      <button className="boton" onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default LogoutButton;