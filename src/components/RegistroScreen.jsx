import ValidarRegistro from "./Registro";
import "../style/login.css";

export const RegistroScreen = () => {
  return (
    <>
      <div className="wrapper ">
        <div>
          <h1 className="text-center ">Registro</h1>
          <ValidarRegistro />
        </div>
      </div>
    </>
  );
};
