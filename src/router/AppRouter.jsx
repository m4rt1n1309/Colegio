import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginScreen } from "../components/LoginScreen";
import { Administracion } from "../components/Administracion";
import { RegistroScreen } from "../components/RegistroScreen";
import { Alumnos } from "../components/Alumnos";
import EstadoAcademico from "../components/EstadoAcademico";
import { ListaAdmin } from "../components/ListaAdmin";

export const AppRouter = () => {
  const isLoggedIn = localStorage.getItem("token");
  
 
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route
          path="/lista"
          element={ isLoggedIn? <ListaAdmin /> : <Navigate to="/" />}
        />
        
        <Route path="/alumnos/:id" element={isLoggedIn ?<EstadoAcademico />: <Navigate to="/" />} />
        <Route
          path="/alumnos"
          element={isLoggedIn ? <Alumnos /> : <Navigate to="/" />}
        />
        <Route
          path="/administracion"
          element={isLoggedIn ? <Administracion /> : <Navigate to="/" />}
        />
        <Route path="/registro" element={isLoggedIn ? <RegistroScreen /> : <Navigate to="/" />} />
     
      </Routes>
    </BrowserRouter>
  );
};
