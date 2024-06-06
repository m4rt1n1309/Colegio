import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button'; // Asegúrate de importar Button desde react-bootstrap
import "../style/ppprincipal.css";

const BotonAtras = () => {
  const navigate = useNavigate(); // Hook para la navegación

  return (
    <Button
      variant="secondary"
      className="mt ms-2"
      onClick={() => navigate(-1)} // Navega a la página anterior
    >
      Volver
    </Button>
  );
};

export default BotonAtras;
