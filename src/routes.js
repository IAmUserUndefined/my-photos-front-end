import React from 'react';
import { Routes, Route } from "react-router-dom";

import Login from './pages/Login/index';
import Register from './pages/Register/index';
import ForgetPassword from './pages/ForgetPassword/index';
import ConfigUser from './pages/ConfigUser/index';
import Photos from './pages/Photos/index';
import Modal from './pages/Modal/index';

export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} exact />
                <Route path="/register" element={<Register />} exact />
                <Route path="/forget-password" element={<ForgetPassword />} exact />
                <Route path="/config-user" element={<ConfigUser />} exact />
                <Route path="/photos" element={<Photos />} exact />
            </Routes>
        </>
    );
}

export const ModalRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Modal />} />
            </Routes>
        </>
    );
}