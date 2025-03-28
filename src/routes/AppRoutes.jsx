import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import LandingPage from '../pages/LandingPage'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<LandingPage />} index={true}/>
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
        </Routes>
    );
}

export default AppRoutes;