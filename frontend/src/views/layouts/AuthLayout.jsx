import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useStateContext } from "../../context/ContextProvider";
const AuthLayout = () => {
    const { token, adminToken, user } = useStateContext();
    if (adminToken) {
        return <Navigate to="/dashboard" />;
    }
    if (!token) {
        return <Navigate to="/home" />;
    }
    if (!user) {
        return <Navigate to="/home" />;
    }
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default AuthLayout;
