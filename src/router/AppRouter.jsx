import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginScreen } from "../components/LoginScreen";
import { Administracion } from "../components/Administracion";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/admin" element={<Administracion />} />
        <Route path="/" element={<Navigate to="/admin" />} />
      </Routes>
    </BrowserRouter>
  );
};
