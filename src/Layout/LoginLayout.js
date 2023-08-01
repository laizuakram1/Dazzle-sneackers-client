import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Shared/Navbar/Navbar';

const LoginLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;