import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import { MainNav } from "../guest/include";
const GuestLayout = () => {
    const { token, adminToken } = useStateContext();
    if (token) {
        return <Navigate to="/" />;
    }
    if (adminToken) {
        return <Navigate to="/dashboard" />;
    }
    return (
        <div>
            <MainNav />
            <Outlet />
        </div>
    );
};

export default GuestLayout;
