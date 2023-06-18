import React, { useState } from "react";
import { Paginate, MoreIcon, Title, Breadcrumb } from "../components";
import axiosClient from "../../../server/axiosClient";
import { orderStatus } from "../lib/constants";
import Pagination from "react-js-pagination";
import { getOrderStatus, convertDate } from "../lib/helpers";
getOrderStatus
const Orders = () => {
    document.title = "Orders";
    const [orders, setOrders] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState("all");
    const [chosenCustomer, setChosenCustomer] = useState("");
    const [displayCount, setDisplayCount] = useState(8);
    const [meta, setMeta] = useState({
        total: 1,
        current_page: 1,
        per_page: 1,
    });

    const getOrders = async (page = 1) => {
        await axiosClient
            .get(`/getorder/${selectedStatus}/${chosenCustomer}?page=${page}`, {
                params: { displayCount: displayCount },
            })
            .then(({ data }) => {
                setMeta(data.meta);
                setOrders(data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const handleStatusChange = (e) => {
        setSelectedStatus(e.target.value);
    };

    React.useEffect(() => {
        getOrders();
    }, [selectedStatus, chosenCustomer, displayCount]);
    return (
        <section>
            <Breadcrumb />
            <Title>List Of Orders</Title>
            {/* Filter Section */}
            <div className="rounded-lg m-5 flex sm:flex-row flex-col">
                <div className="flex flex-row mb-1 sm:mb-0">
                    {/* First Selects */}
                    <div className="relative">
                        <select
                            className="h-full rounded-l border block appearance-none w-full bg-white border-gray-200 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-whit"
                            onChange={(e) => setDisplayCount(e.target.value)}
                        >
                            <option value="8">8</option>
                            <option value="12">12</option>
                            <option value="16">16</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg
                                className="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                    {/* Second Select */}
                    <div className="relative">
                        <select
                            className=" h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-200 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white"
                            onChange={handleStatusChange}
                        >
                            <option value="all">All</option>
                            {orderStatus.map((item, i) => {
                                return (
                                    <option
                                        key={i}
                                        value={item}
                                        className="capitalize"
                                    >
                                        {item}
                                    </option>
                                );
                            })}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg
                                className="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
                {/* Search Input */}
                <div className="block relative">
                    <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4 fill-current text-gray-500"
                        >
                            <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                        </svg>
                    </span>
                    <input
                        placeholder="Search By Customer"
                        value={chosenCustomer}
                        onChange={(e) => setChosenCustomer(e.target.value)}
                        className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-200 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                    />
                </div>
            </div>
            <div className="rounded-lg border border-gray-200 shadow-lg m-5">
                {/* table */}
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500 rounded-xl">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-2 font-medium text-gray-900">
                                #Id
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                Customer Info
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900 flex gap-3"
                            >
                                <span>Order Status</span>
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                Shipping Address
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                OrderTotal
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                Method
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                Order Date
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                More Info
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        {orders.map((order) => {
                            return <Row key={order.id} {...order} />;
                        })}
                    </tbody>
                </table>
                {/* Pagination */}
                <div className="flex items-center justify-between border-t border-gray-200 bg-gray-100 px-4 py-3 sm:px-6">
                    <Pagination
                        totalItemsCount={meta.total}
                        activePage={meta.current_page}
                        itemsCountPerPage={meta.per_page}
                        onChange={(page) => getOrders(page)}
                        itemClass="inline-block mx-1"
                        linkClass="px-3 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900"
                        activeLinkClass="rounded-lg bg-[#c5a992] text-white"
                        disabledClass="rounded-lg bg-gray-200 text-gray-500 cursor-not-allowed"
                    />
                </div>
            </div>
        </section>
    );
};
const Row = ({
    id,
    full_name,
    email,
    status,
    order_date,
    total_price,
    address,
    method,
}) => {
    return (
        <tr className="hover:bg-gray-50">
            <td className="px-2">
                <span className="flex justify-center items-center underline">
                    {id}
                </span>
            </td>
            <td className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                <div className="text-sm">
                    <div className="font-medium text-gray-700">{full_name}</div>
                    <div className="text-gray-400">{email}</div>
                </div>
            </td>
            <td className={`px-6 py-4`}>
                {getOrderStatus(status)}
            </td>
            <td className="px-6 py-4">{address}</td>
            <td className="px-6 py-4">${total_price}</td>
            <td className="px-6 py-4">{method}</td>
            <td className="px-6 py-4">
                <div className="flex gap-2">
                    <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-gray-400">
                        {convertDate(order_date)}
                    </span>
                </div>
            </td>
            <td className="px-6 py-4">
                <div className="flex justify-center gap-4">
                    <MoreIcon link={`/dashboard/order/${id}`} />
                </div>
            </td>
        </tr>
    );
};
export default Orders;
