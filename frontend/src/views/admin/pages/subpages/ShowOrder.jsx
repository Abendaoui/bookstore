import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosClient from "../../../../server/axiosClient";
import { orderStatus } from "../../lib/constants";
import { convertDate } from "../../lib/helpers";
const ShowOrder = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [order, setOrder] = useState({
        full_name: "",
        telephone: "",
        ordered_products: "",
        total_price: "",
        order_date: "",
        status: "",
        email: "",
        address: "",
        method: "",
    });
    const [status, setStatus] = useState("");

    const getOrder = async () => {
        await axiosClient
            .get(`/orders/${id}`)
            .then(({ data }) => {
                setOrder(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        await axiosClient
            .put(`/orders/${id}`, {
                status: status,
            })
            .then(({ data }) => {
                if (data) {
                    navigate("/dashboard/orders");
                }
            })
            .catch((error) => {
                const response = error.response;
                if (response && response.status === 422) {
                    console.log(response.data.errors);
                }
            });
    };
    useEffect(() => {
        getOrder();
    }, []);
    return (
        <section className="mx-auto mt-2 max-w-5xl bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-center text-gray-600 text-xl">
                Add New Employee
            </h1>
            <form
                className="mt-8"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
            >
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    {/* Full_name */}
                    <div>
                        <label
                            htmlFor="username"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Customer Full Name
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#c5a992] focus:border-[#c5a992] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#c5a992]dark:focus:border-[#c5a992]"
                            readOnly
                            autoFocus
                            value={order.full_name}
                        />
                    </div>
                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Employee Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#c5a992] focus:border-[#c5a992] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#c5a992] dark:focus:border-[#c5a992]"
                            readOnly
                            value={order.email}
                        />
                    </div>
                    {/* Phone */}
                    <div>
                        <label
                            htmlFor="tel"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Customer Phone
                        </label>
                        <input
                            type="tel"
                            id="tel"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#c5a992] focus:border-[#c5a992] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#c5a992] dark:focus:border-[#c5a992]"
                            readOnly
                            value={order.telephone}
                        />
                    </div>
                    {/* Address */}
                    <div>
                        <label
                            htmlFor="address"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Shipping Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#c5a992] focus:border-[#c5a992] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#c5a992]dark:focus:border-[#c5a992]"
                            readOnly
                            value={order.address}
                        />
                    </div>
                    {/* Total Price Paid */}
                    <div>
                        <label
                            htmlFor="total_price"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Price Paid
                        </label>
                        <input
                            type="text"
                            id="total_price"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#c5a992] focus:border-[#c5a992] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#c5a992]dark:focus:border-[#c5a992]"
                            readOnly
                            value={`$${order.total_price}`}
                        />
                    </div>
                    {/* Order Date */}
                    <div>
                        <label
                            htmlFor="order_date"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Order Date
                        </label>
                        <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#c5a992] focus:border-[#c5a992] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#c5a992] dark:focus:border-[#c5a992]">
                            {convertDate(order.order_date)}
                        </p>
                    </div>
                    {/* Ordered Books */}
                    <div>
                        <label
                            htmlFor="address"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Shipping Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#c5a992] focus:border-[#c5a992] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#c5a992]dark:focus:border-[#c5a992]"
                            readOnly
                            value={order.address}
                        />
                    </div>
                    {/* Status */}
                    <div>
                        <label
                            htmlFor="status"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Status
                        </label>

                        <select
                            id="status"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#c5a992] focus:border-[#c5a992] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#c5a992]dark:focus:border-[#c5a992]"
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            {orderStatus.map((item, i) => {
                                return (
                                    <option
                                        key={i}
                                        value={item}
                                        className="text-gray-500 capitalize"
                                    >
                                        {item}
                                    </option>
                                );
                            })}
                        </select>
                        <small className="text-[#c5a992] text-xs">
                            Current Status : {order.status}
                        </small>
                    </div>
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="text-white bg-[#c5a992] hover:bg-[#c5a992] focus:ring-4 focus:outline-none focus:ring-[#c5a992] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#c5a992] dark:hover:bg-[#c5a992] dark:focus:ring-[#c5a992]"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </section>
    );
};

export default ShowOrder;
