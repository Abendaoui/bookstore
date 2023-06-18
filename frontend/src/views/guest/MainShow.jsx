import React, { useState, useEffect } from "react";
import axiosClient from "../../server/axiosClient";
import { useParams, Link } from "react-router-dom";
import { MainLatest, MainNav } from "./include";
const MainShow = () => {
    const { book } = useParams();
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [bookTarget, setBookTarget] = useState({});
    const getBook = async () => {
        await axiosClient
            .get(`/mainbooks/${book}`)
            .then(({ data }) => {
                setBookTarget(data.book);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        getBook();
    }, []);
    return (
        <>
            <MainNav />

            <section className="mt-20 mx-auto max-w-7xl mb-16">
                <article className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
                    <div className="flex items-center justify-center lg:w-1/2">
                        <div className="w-[300px]">
                            <img
                                className="object-cover shadow-xl"
                                src={`http://localhost:8000/images/books/${bookTarget.cover}`}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                        <div className="border-b border-gray-200 pb-6 capitalize text-center">
                            <h1
                                className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
                            >
                                {bookTarget.title}
                            </h1>
                        </div>
                        <div className="py-4 border-b border-gray-300 flex items-center justify-between capitalize">
                            <p className="text-base leading-4 text-gray-800">
                                Author
                            </p>
                            <div className="flex items-center justify-center">
                                <Link>
                                    <h1>{bookTarget.author_name}</h1>
                                </Link>
                            </div>
                        </div>
                        <div className="py-4 border-b border-gray-300 flex items-center justify-between capitalize">
                            <p className="text-base leading-4 text-gray-800">
                                Category
                            </p>
                            <div className="flex items-center justify-center">
                                <Link>
                                    <p className="text-sm leading-none text-gray-600 mr-3">
                                        {bookTarget.category_name}
                                    </p>
                                </Link>
                            </div>
                        </div>
                        <div className="py-4 border-b border-gray-300 flex items-center justify-between capitalize">
                            <p className="text-base leading-4 text-gray-800">
                                Price
                            </p>
                            <div className="flex items-center justify-center">
                                <p className="text-sm leading-none text-gray-600 mr-3">
                                    ${bookTarget.price}
                                </p>
                            </div>
                        </div>
                        <div className="py-4 border-b border-gray-300 flex items-center justify-between capitalize">
                            <p className="text-base leading-4 text-gray-800">
                                Language
                            </p>
                            <div className="flex items-center justify-center">
                                <Link>
                                    <p className="text-sm leading-none text-gray-600 mr-3">
                                        {bookTarget.language}
                                    </p>
                                </Link>
                            </div>
                        </div>
                        <div className="py-4 border-b border-gray-300 flex items-center justify-between capitalize">
                            <p className="text-base leading-4 text-gray-800">
                                Published At
                            </p>
                            <div className="flex items-center justify-center">
                                <Link>
                                    <p className="text-sm leading-none text-gray-600 mr-3">
                                        {bookTarget.published_date}
                                    </p>
                                </Link>
                            </div>
                        </div>
                        <div className="py-4 border-b border-gray-300 flex items-center justify-between">
                            <p className="text-base leading-4 text-gray-800">
                                Number Of Pages
                            </p>
                            <div className="flex items-center justify-center">
                                <Link>
                                    <p className="text-sm leading-none text-gray-600 mr-3">
                                        {bookTarget.nb_pages} Pages
                                    </p>
                                </Link>
                            </div>
                        </div>
                        <Link
                            to="/login"
                            className="
						focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
						text-base
						flex
						items-center gap-5
						justify-center
                        border border-dashed border-[#c5a992] hover:bg-[#f6e6da]
						leading-none
						text-gray-700 rounded-lg shadow-lg mt-2
						w-full
						py-4 transition-colors
					"
                        >
                            Shop Now
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                />
                            </svg>
                        </Link>
                        <div className="w-full mt-4">
                            <h1>Description</h1>
                            <p className="text-gray-400 py-2 capitalize">
                                {bookTarget.description &&
                                    bookTarget.description.substring(0, 200)}
                            </p>
                        </div>
                        <div>
                            <div className="border-t border-b py-4 mt-7 border-gray-200">
                                <div
                                    onClick={() => setShow(!show)}
                                    className="flex justify-between items-center cursor-pointer"
                                >
                                    <p className="text-base leading-4 text-gray-800">
                                        Shipping and returns
                                    </p>
                                    <button
                                        className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                                        aria-label="show or hide"
                                    >
                                        <svg
                                            className={
                                                "transform " +
                                                (show
                                                    ? "rotate-180"
                                                    : "rotate-0")
                                            }
                                            width="10"
                                            height="6"
                                            viewBox="0 0 10 6"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M9 1L5 5L1 1"
                                                stroke="#4B5563"
                                                strokeWidth="1.25"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div
                                    className={
                                        "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
                                        (show ? "block" : "hidden")
                                    }
                                    id="sect"
                                >
                                    You will be responsible for paying for your
                                    own shipping costs for returning your item.
                                    Shipping costs are nonrefundable
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="border-b py-4 border-gray-200">
                                <div
                                    onClick={() => setShow2(!show2)}
                                    className="flex justify-between items-center cursor-pointer"
                                >
                                    <p className="text-base leading-4 text-gray-800">
                                        Contact us
                                    </p>
                                    <button
                                        className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                                        aria-label="show or hide"
                                    >
                                        <svg
                                            className={
                                                "transform " +
                                                (show2
                                                    ? "rotate-180"
                                                    : "rotate-0")
                                            }
                                            width="10"
                                            height="6"
                                            viewBox="0 0 10 6"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M9 1L5 5L1 1"
                                                stroke="#4B5563"
                                                strokeWidth="1.25"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div
                                    className={
                                        "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
                                        (show2 ? "block" : "hidden")
                                    }
                                    id="sect"
                                >
                                    If you have any questions on how to return
                                    your item to us,{" "}
                                    <span>
                                        <Link to="/contact">contact us.</Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="mt-10">
                    <MainLatest />
                </article>
            </section>
        </>
    );
};

export default MainShow;
