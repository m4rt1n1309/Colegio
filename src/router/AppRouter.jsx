import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginScreen } from '../components/LoginScreen'
import Administracion from '../components/administracion'

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginScreen/>}/>
            <Route path="/paginaprincipal" element={<Administracion/>}/>
        </Routes>
    </BrowserRouter>
  )
}
