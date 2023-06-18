import React, { useState, useEffect } from "react";
import {
    IoBagHandle,
    IoPieChart,
    IoPeople,
    IoCart,
    IoBook,
} from "react-icons/io5";
import axiosClient from "../../../server/axiosClient";

export default function DashboardStatsGrid() {
    const [totalSales, setTotalSales] = useState({
        total: 0,
        percentage_change: 0,
    });
    const [customersCount, setCustomersCount] = useState({
        total: 0,
        percentage_change: 0,
    });
    const [orderCount, setOrderCount] = useState({
        total: 0,
        percentage_change: 0,
    });
    async function gettotalSales() {
        await axiosClient
            .get("/gettotalseles")
            .then(({ data }) => {
                setTotalSales(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    const getUsersCount = async () => {
        await axiosClient
            .get("/userscount")
            .then(({ data }) => {
                setCustomersCount(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    async function getOrderCount() {
        await axiosClient
            .get("/ordercount")
            .then(({ data }) => {
                setOrderCount(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    useEffect(() => {
        gettotalSales();
        getUsersCount();
        getOrderCount();
    }, []);
    return (
        <div className="flex gap-4">
            {/* Sales */}
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
                    <IoBagHandle className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">
                        Total Sales
                    </span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">
                            ${totalSales && totalSales.total}
                        </strong>
                        <span
                            className={`text-sm pl-2 ${
                                totalSales.percentage_change > 0
                                    ? "text-green-500"
                                    : "text-red-500"
                            }`}
                        >
                            {totalSales &&
                                totalSales.percentage_change.toFixed(0)}
                            %
                        </span>
                    </div>
                </div>
            </BoxWrapper>

            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
                    <IoBook className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">
                        Total Products
                    </span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">
                            34
                        </strong>
                    </div>
                </div>
            </BoxWrapper>
            {/* Customers */}
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
                    <IoPeople className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">
                        Total Customers
                    </span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">
                            {customersCount && customersCount.total}
                        </strong>
                        <span
                            className={`text-sm pl-2 ${
                                customersCount.percentage_change > 0
                                    ? "text-green-500"
                                    : "text-red-500"
                            }`}
                        >
                            {customersCount &&
                                customersCount.percentage_change.toFixed(0)}
                            %
                        </span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
                    <IoCart className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">
                        Total Orders
                    </span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">
                            {orderCount && orderCount.total}
                        </strong>
                        <span
                            className={`text-sm pl-2 ${
                                orderCount.percentage_change > 0
                                    ? "text-green-500"
                                    : "text-red-500"
                            }`}
                        >
                            {orderCount &&
                                orderCount.percentage_change.toFixed(0)}
                            %
                        </span>
                    </div>
                </div>
            </BoxWrapper>
        </div>
    );
}

function BoxWrapper({ children }) {
    return (
        <div className="bg-white transition-all rounded-xl shadow-lg p-4 flex-1 border border-gray-200 flex items-center hover:scale-105">
            {children}
        </div>
    );
}
