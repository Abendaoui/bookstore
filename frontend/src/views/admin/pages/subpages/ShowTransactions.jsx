import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../../../../server/axiosClient";
import { format } from "date-fns";
const ShowTransactions = () => {
    const { id } = useParams();
    const [order, setOrder] = useState({
        full_name: "",
        telephone: "",
        id: "",
        ordered_products: "",
        total_price: "",
        order_date: "",
        status: "",
    });

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
    function convertDate(date) {
        const dateStr = date;
        const dateObj = new Date(dateStr);
        const options = { month: "short", day: "numeric", year: "numeric" };
        const formattedDate = dateObj.toLocaleDateString("en-US", options);
        return formattedDate;
    }
    useEffect(() => {
        getOrder();
    }, []);

    return (
        <section className="flex justify-center items-center h-full">
            <div className="rounded-md relative w-72 shadow-2xl p-3 bg-white">
                <div className="py-2">
                    <div className="text-center text-xl font-bold">ORDER</div>
                    <div className="text-center text-xs font-bold">
                        The order details
                    </div>
                </div>
                <div className="text-center text-xs font-bold mb-1">
                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                </div>
                {/* Customer Info */}
                <div className="text-xs pl-2">
                    <div className="text-xs mb-1">
                        Customer：{order && order.full_name}
                    </div>
                    <div className="text-xs mb-1">
                        TelePhone：{order && order.telephone}
                    </div>
                    <div>OrderNumber：{order && order.id}</div>
                </div>
                {/* Product */}
                <div className="border-double border-t-4 border-b-4 border-l-0 border-r-0 border-gray-900 my-3">
                    <div className="flex text-sm pt-1 px-1">
                        <span className="w-2/6">Book Name</span>
                    </div>
                    <div className="border-dashed border-t border-b border-l-0 border-r-0 border-gray-900 mt-1 my-2 py-2 px-1">
                        {order &&
                            order.ordered_products
                                .split(",")
                                .map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="flex justify-between text-sm"
                                        >
                                            <span className="w-4/6 truncate">
                                                - {item}
                                            </span>
                                        </div>
                                    );
                                })}
                    </div>
                </div>
                {/* Total Price */}
                <div className="text-xs">
                    <div className="mb-1">
                        Total Paid : ${order && order.total_price}
                    </div>
                    <div className="mb-52 capitalize">
                        Order Status : {order.status}
                    </div>
                    <div className="text-right">
                        <div>
                            Time：
                            {order && convertDate(order.order_date)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowTransactions;
