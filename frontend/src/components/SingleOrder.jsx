import React, { useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../server/axiosClient";
const SingleOrder = ({
    id,
    order_date,
    total_price,
    status,
    convertDate,
    getOrderStatus,
    getOrders,
}) => {
    const [keep, setKeep] = useState(false);
    const cancelOrder = async (id) => {
        await axiosClient
            .put(`/orders/${id}`, {
                status: "canceled",
            })
            .then(({ data }) => {
                getOrders();
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const returnOrder = async (id) => {
        await axiosClient
            .put(`/orders/${id}`, {
                status: "returned",
                id: id,
            })
            .then(({ data }) => {
                getOrders();
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <tr>
            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                <div className="inline-flex items-center gap-x-3">
                    <Link to={`/order/${id}`}>#{id}</Link>
                </div>
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                {convertDate(order_date)}
            </td>
            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                {getOrderStatus(status)}
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                ${total_price}
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                <div className="flex items-center justify-around capitalize">
                    {status === "pending" || status === "accepted" ? (
                        <button onClick={() => cancelOrder(id)}>cancel</button>
                    ) : status === "delivered" ? (
                        <Link to={`/return/${id}`}>return</Link>
                    ) : (
                        ""
                    )}
                    <button onClick={() => setKeep(true)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                            />
                        </svg>
                    </button>
                </div>
            </td>
            {/* Model */}
            <div
                id="defaultModal"
                tabindex="-1"
                aria-hidden="true"
                className={`fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full
                ${!keep ? "hidden" : ""}`}
            >
                <div className="relative flex min-h-screen flex-col justify-center overflow-hidde py-6 sm:py-12">
                    <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                    <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                        {/* Remove Button */}
                        <div className="top-4 right-4 absolute">
                            <button
                                className="text-gray-700 text-lg"
                                onClick={() => setKeep(false)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-7 h-7"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="mx-auto max-w-md">
                            <h1 className="text-center text-gray-500 text-xl">
                                Order Details
                            </h1>
                            <div className="divide-y divide-gray-300/50">
                                <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                                    <p>
                                        From Here You Can Keep Track On Your
                                        Order
                                    </p>
                                    <ul className="space-y-10 ">
                                        {status !== "returned" &&
                                        status !== "canceled" ? (
                                            <>
                                                {/* Pending */}
                                                <li className="flex items-center">
                                                    <svg
                                                        className={`h-6 w-6 flex-none stroke-2 ${
                                                            status === "pending"
                                                                ? "fill-yellow-100 stroke-yellow-500"
                                                                : "fill-green-100 stroke-green-500"
                                                        }`}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <circle
                                                            cx="12"
                                                            cy="12"
                                                            r="11"
                                                        />
                                                        <path
                                                            d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                                                            fill="none"
                                                        />
                                                    </svg>
                                                    <p className="ml-4">
                                                        <code className="text-sm font-bold text-gray-900">
                                                            Your Order is in
                                                            process
                                                        </code>
                                                    </p>
                                                </li>
                                                {/* Accept */}
                                                <li className="flex items-center">
                                                    <svg
                                                        className={`h-6 w-6 flex-none stroke-2 ${
                                                            status ===
                                                            "accepted"
                                                                ? "fill-orange-100 stroke-orange-500"
                                                                : status ===
                                                                  "pending"
                                                                ? "fill-gray-100 stroke-gray-500"
                                                                : "fill-green-100 stroke-green-500"
                                                        }`}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <circle
                                                            cx="12"
                                                            cy="12"
                                                            r="11"
                                                        />
                                                        <path
                                                            d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                                                            fill="none"
                                                        />
                                                    </svg>
                                                    <p className="ml-4">
                                                        <code className="text-sm font-bold text-gray-900">
                                                            The Owner Accepted
                                                            Your Order
                                                        </code>
                                                    </p>
                                                </li>
                                                {/* Shipped */}
                                                <li className="flex items-center">
                                                    <svg
                                                        className={`h-6 w-6 flex-none stroke-2 ${
                                                            status === "shipped"
                                                                ? "fill-teal-100 stroke-teal-500"
                                                                : status ===
                                                                      "pending" ||
                                                                  status ===
                                                                      "accepted"
                                                                ? "fill-gray-100 stroke-gray-500"
                                                                : "fill-green-100 stroke-green-500"
                                                        }`}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <circle
                                                            cx="12"
                                                            cy="12"
                                                            r="11"
                                                        />
                                                        <path
                                                            d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                                                            fill="none"
                                                        />
                                                    </svg>
                                                    <p className="ml-4">
                                                        <code className="text-sm font-bold text-gray-900">
                                                            Your Order is in
                                                            Shipping Now
                                                        </code>
                                                    </p>
                                                </li>
                                                {/* Delivered */}
                                                <li className="flex items-center">
                                                    <svg
                                                        className={`h-6 w-6 flex-none stroke-2 ${
                                                            status ===
                                                            "delivered"
                                                                ? "fill-green-100 stroke-green-500"
                                                                : "fill-gray-100 stroke-gray-500"
                                                        }`}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <circle
                                                            cx="12"
                                                            cy="12"
                                                            r="11"
                                                        />
                                                        <path
                                                            d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                                                            fill="none"
                                                        />
                                                    </svg>
                                                    <p className="ml-4">
                                                        <code className="text-sm font-bold text-gray-900">
                                                            Order Delivered
                                                        </code>
                                                    </p>
                                                </li>
                                            </>
                                        ) : (
                                            // Return Or cancel
                                            <li className="flex items-center">
                                                <svg
                                                    className={`h-6 w-6 flex-none stroke-2
                                                ${
                                                    status === "returned"
                                                        ? "fill-red-100 stroke-red-500"
                                                        : "fill-red-500 stroke-red-100"
                                                }`}
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <circle
                                                        cx="12"
                                                        cy="12"
                                                        r="11"
                                                    />
                                                    <path
                                                        d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                                                        fill="none"
                                                    />
                                                </svg>
                                                <p className="ml-4">
                                                    <code className="text-sm font-bold text-gray-900 capitalize">
                                                        Order {status}
                                                    </code>
                                                </p>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                                <div className="pt-8 text-base font-semibold leading-7">
                                    <p className="text-gray-900">
                                        For Any Problem Help Or Information
                                    </p>
                                    <p>
                                        <Link to="/contact">Contact Us</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Model */}
        </tr>
    );
};

export default SingleOrder;
