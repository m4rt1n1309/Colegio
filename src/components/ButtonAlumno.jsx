import { useNavigate } from "react-router-dom";
import "../style/ppprincipal.css";

const BotonAlumno = () => {
  const navigate = useNavigate();

  const handleAlumno = () => {
    // Eliminar el token del almacenamiento local

    // Redirigir a la página de inicio de sesión
    navigate("/alumnos");
  };

  return (
    <div className="contenedor-botonalumno">
      <button className="botonalumnos" onClick={handleAlumno}>
        Alumnos
      </button>
    </div>
  );
};

export default BotonAlumno;
