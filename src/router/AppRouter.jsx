import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginScreen } from "../components/LoginScreen";
import { Administracion } from "../components/Administracion";

export const AppRouter = () => {
  const isLoggedIn = localStorage.getItem('token');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route
          path="/administracion"
          element={isLoggedIn ? <Administracion /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
};
