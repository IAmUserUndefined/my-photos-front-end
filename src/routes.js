import React from 'react';
import { Routes, Route } from "react-router-dom";

import Login from './pages/Login/index';
import Register from './pages/Register/index';
import ForgetPassword from './pages/ForgetPassword/index';
import ConfigUser from './pages/ConfigUser/index';

export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} exact />
                <Route path="/register" element={<Register />} exact />
                <Route path="/forget-password" element={<ForgetPassword />} exact />
                <Route path="/config-user" element={<ConfigUser />} exact />
            </Routes>
        </>
    );
}