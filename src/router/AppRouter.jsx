import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginScreen } from "../components/LoginScreen";
import { Administracion } from "../components/Administracion";
import { RegistroScreen } from "../components/RegistroScreen";

export const AppRouter = () => {
  const isLoggedIn = localStorage.getItem('token');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/registro" element={<RegistroScreen />} />

        <Route
          path="/administracion"
          element={isLoggedIn ? <Administracion /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
};
