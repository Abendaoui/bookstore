import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import { useTranslation } from "react-i18next";

const SingleUnit = ({ id, title, slug, cover, price }) => {
    const { t } = useTranslation();
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);
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
                            <Link
                                to='/login'
                                className={`py-2 px-3 border border-dashed border-[#c5a992] hover:bg-[#f6e6da] text-gray-700 rounded disabled:opacity-50 mt-4 w-full flex items-center justify-center`}
                            >
                                {t("Add to order.1")}
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
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleUnit;
