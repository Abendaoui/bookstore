import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import axiosClient from "../../../server/axiosClient";
import { getOrderStatus } from "../lib/helpers";
axiosClient;

export default function RecentOrders() {
    const [recentOrder, setRecentOrder] = useState([]);
    const getRecentOrder = async () => {
        axiosClient
            .get("/recentorder")
            .then(({ data }) => {
                setRecentOrder(data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        getRecentOrder();
    }, []);
    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-700 font-medium">Recent Orders</strong>
            <div className="border-x border-gray-200 rounded-sm mt-3">
                <table className="w-full text-gray-700">
                    <thead className="bg-gray-200">
                        <tr>
                            <th>ID</th>
                            <th>Customer Name</th>
                            <th>Order Date</th>
                            <th>Order Total</th>
                            <th>Shipping Address</th>
                            <th>Order Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentOrder.map((order) => (
                            <tr
                                key={order.id}
                                className={`text-center ${
                                    order.id % 2 === 0 ? "bg-gray-100" : ""
                                }`}
                            >
                                <td className="px-6 py-2">
                                    <Link to={`/order/${order.id}`}>
                                        #{order.id}
                                    </Link>
                                </td>
                                <td className="px-6 py-2">
                                    <span>{order.full_name}</span>
                                </td>
                                <td className="px-6 py-2">
                                    {format(
                                        new Date(order.order_date),
                                        "dd MMM yyyy"
                                    )}
                                </td>
                                <td className="px-6 py-2">
                                    ${order.total_price}
                                </td>
                                <td className="px-6 py-2">{order.address}</td>
                                <td className="px-6 py-2">{getOrderStatus(order.status)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
