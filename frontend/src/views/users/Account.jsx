import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../server/axiosClient";
import SingleOrder from "../../components/SingleOrder";
import { getOrderStatus, convertDate } from "../admin/lib/helpers";
const Account = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        address: "",
        phone: "",
        created_at: "",
        profile: "",
    });
    const [orders, setOrders] = useState([]);
    const getUser = async () => {
        await axiosClient
            .get("/user")
            .then(({ data }) => {
                setUser(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const getOrders = async () => {
        await axiosClient
            .get("/orders")
            .then(({ data }) => {
                setOrders(data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        getUser();
        getOrders();
    }, []);
    return (
        <section className=" mt-20 max-w-7xl mx-auto ">
            <div className="container mx-auto my-5 p-5 ">
                <div className="md:flex no-wrap md:-mx-2 ">
                    {/* <!-- Left Side --> */}
                    <div className="w-full md:w-3/12 md:mx-2">
                        {/* <!-- Profile Card --> */}
                        <div className="bg-white p-3 border-t-4 border-[#c5a992]">
                            <div className="image overflow-hidden">
                                <img
                                    className="h-auto w-20 mx-auto rounded-full"
                                    src={`http://localhost:8000/images/users/${user.profile}`}
                                    alt=""
                                />
                            </div>
                            <h1 className="text-gray-900 font-bold text-center text-xl leading-8 my-1">
                                {user.name}
                            </h1>
                            <h3 className="text-gray-600 font-lg text-center text-semibold leading-6">
                                {user.email}
                            </h3>
                            <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                <li className="flex text-sm items-center py-3">
                                    <span>Member since</span>
                                    <span className="ml-auto">
                                        {convertDate(user.created_at)}
                                    </span>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- End of profile card --> */}
                    </div>
                    {/* <!-- Right Side --> */}
                    <div className="w-full md:w-9/12 mx-2 h-64">
                        {/* <!-- About Section --> */}
                        <div className="bg-white p-3 shadow-sm rounded-sm border-t-4 border-[#c5a992]">
                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                <span clas="text-green-500">
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
                                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </span>
                                <span className="tracking-wide">About</span>
                            </div>
                            <div className="text-gray-700">
                                <div className="grid md:grid-cols-2 text-sm">
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">
                                            First Name
                                        </div>
                                        <div className="px-4 py-2">
                                            {user.name.substr(
                                                0,
                                                user.name.indexOf(" ")
                                            )}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">
                                            Last Name
                                        </div>
                                        <div className="px-4 py-2">
                                            {user.name.substr(
                                                user.name.indexOf(" ") + 1
                                            )}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">
                                            Contact No.
                                        </div>
                                        <div className="px-4 py-2">
                                            {user.phone
                                                ? user.phone
                                                : "not set"}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">
                                            Address
                                        </div>
                                        <div className="px-4 py-2">
                                            {user.address
                                                ? user.address
                                                : "not set"}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">
                                            Email.
                                        </div>
                                        <div className="px-4 py-2">
                                            <a
                                                className="text-blue-800"
                                                href="mailto:jane@example.com"
                                            >
                                                {user.email}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link
                                to="/account/edit"
                                className="block text-center w-full text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
                            >
                                Edit Information
                            </Link>
                        </div>
                        {/* <!-- End of about section --> */}

                        <div className="my-4"></div>

                        <div className="bg-white p-3 shadow-sm rounded-sm border-t-4 border-[#c5a992] max-h-96 overflow-auto">
                            <div className="">
                                <div className="">
                                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                        <span clas="text-green-500">
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
                                                    d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                                                />
                                            </svg>
                                        </span>
                                        <span className="tracking-wide">
                                            Orders
                                        </span>
                                    </div>
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                        <thead className="bg-gray-50 dark:bg-gray-800">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                                >
                                                    <div className="flex items-center gap-x-3">
                                                        <button className="flex items-center gap-x-2">
                                                            <svg
                                                                className="h-3"
                                                                viewBox="0 0 10 11"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                                                                    fill="currentColor"
                                                                    stroke="currentColor"
                                                                    stroke-width="0.1"
                                                                />
                                                                <path
                                                                    d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                                                                    fill="currentColor"
                                                                    stroke="currentColor"
                                                                    stroke-width="0.1"
                                                                />
                                                                <path
                                                                    d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                                                                    fill="currentColor"
                                                                    stroke="currentColor"
                                                                    stroke-width="0.3"
                                                                />
                                                            </svg>
                                                            <span>
                                                                Order N°
                                                            </span>
                                                        </button>
                                                    </div>
                                                </th>

                                                <th
                                                    scope="col"
                                                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                                >
                                                    Date
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                                >
                                                    Status
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                                >
                                                    Total Paid
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                                >
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orders.length > 0 ? (
                                                orders.map((order) => {
                                                    const { id } = order;
                                                    return (
                                                        <SingleOrder
                                                            key={id}
                                                            {...order}
                                                            convertDate={
                                                                convertDate
                                                            }
                                                            getOrderStatus={
                                                                getOrderStatus
                                                            }
                                                            getOrders={
                                                                getOrders
                                                            }
                                                        />
                                                    );
                                                })
                                            ) : (
                                                <>
                                                    <tr>
                                                        <td
                                                            className="px-4 py-4 text-sm
                                                        text-center font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap"
                                                            colSpan="5"
                                                        >
                                                            No Order To Display
                                                        </td>
                                                    </tr>
                                                </>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/* <!-- End of Experience and education grid --> */}
                        </div>
                        {/* <!-- End of profile tab --> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Account;
