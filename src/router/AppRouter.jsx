import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginScreen } from '../components/LoginScreen'

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginScreen/>}/>
        </Routes>
    </BrowserRouter>
  )
}
