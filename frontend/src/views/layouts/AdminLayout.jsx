import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import Sidebar from "../admin/components/shared/Sidebar";
import Header from "../admin/components/shared/Header";

const AdminLayout = () => {
    const { adminToken } = useStateContext();
    if (!adminToken) {
        return <Navigate to="/home" />;
    }
    return (
        <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Header />
                <div className="flex-1 p-4 min-h-0 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
