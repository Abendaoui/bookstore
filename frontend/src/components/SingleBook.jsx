import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../server/axiosClient";
import AOS from "aos";
import { useTranslation } from "react-i18next";
const SingleBook = ({ id, title, slug, cover, price }) => {
    const { t } = useTranslation();
    const [notifaction, setNotification] = useState(false);
    const addToOrder = async (id, price) => {
        try {
            const formData = new FormData();
            formData.append("book_id", id);
            formData.append("quantity", 1);
            formData.append("price", price);

            const { data } = await axiosClient.post("/carts", formData);
            if (data.msg === "success") {
                setNotification(true);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);
    useEffect(() => {
        if (notifaction) {
            setTimeout(() => {
                setNotification(false);
            }, 2000);
        }
    }, [notifaction]);
    return (
        <>
            <div
                className="flex-shrink-0 lg:w-64 w-60 h-[450px] mr-4 flex flex-col rounded-lg"
                data-aos="zoom-in"
            >
                <div className="flex-shrink-0">
                    <Link to={`/books/${slug}`}>
                        <div className=" relative h-[310px] flex justify-center">
                            <img
                                src={`http://localhost:8000/images/books/${cover}`}
                                alt="Book Title"
                                className="object-cover rounded-t-lg h-[300px]"
                            />
                        </div>
                    </Link>
                    <div className="p-2">
                        <h3 className="text-lg font-medium text-gray-900">
                            {title && title.substring(0, 10)}...
                        </h3>
                        <p className="mt-1 text-gray-500">${price}</p>
                        <div className="mt-2 w-52 mx-auto">
                            <button
                                className={`py-2 px-3 border border-dashed border-[#c5a992] hover:bg-[#f6e6da] text-gray-700 rounded disabled:opacity-50 mt-4 w-full flex items-center justify-center ${
                                    notifaction && "text-green-500"
                                }`}
                                onClick={() => addToOrder(id, price)}
                            >
                                {t("Add to order.1")}
                                {notifaction === false ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 ml-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 ml-2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBook;
