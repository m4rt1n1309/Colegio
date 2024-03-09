import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginScreen } from '../components/LoginScreen'
import ValidarRegistro from '../components/Registro'
import { Home } from '../components/Home'


export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            {/* <Route path='/home' element={<Home/>}/> */}
            <Route path="/login" element={<LoginScreen/>}/>
            {/* <Route path='/registro' element={<ValidarRegistro/>}/> */}
        </Routes>
    </BrowserRouter>
  )
}
