import { useState } from "react";
import axiosClient from "../../server/axiosClient";
const SingleCart = ({ id, name, title, cover, price, quantity, getBag }) => {
    const removeCart = async (id) => {
        await axiosClient
            .delete(`/carts/${id}`)
            .then(({ data }) => {
                if (data) {
                    getBag();
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const Increment = (id) => {
        axiosClient
            .put(`/cart/${id}/add`)
            .then(({ data }) => {
                if (data) {
                    getBag();
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const Decrement = (id) => {
        axiosClient
            .put(`/cart/${id}/minus`)
            .then(({ data }) => {
                if (data) {
                    getBag();
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <article
            key={id}
            className="justify-between rounded-lg  p-6 shadow-xl sm:flex sm:justify-start"
        >
            <img
                src={`http://localhost:8000/images/books/${cover}`}
                className="w-40 rounded-lg lg:w-20 mx-auto"
            />
            <div className="sm:ml-4 flex flex-col lg:flex-row sm:w-full items-center sm:justify-between">
                <div className="mt-5 sm:mt-0 text-center lg:text-left">
                    <h2 className="text-xl lg:text-2xl font-bold text-gray-700 capitalize">
                        {title.length > 25
                            ? `${title.substring(0, 20)}...`
                            : title}
                    </h2>
                    <p className="mt-1 text-base text-gray-500 capitalize">
                        {name}
                    </p>
                </div>
                <div className="mt-4 flex justify-between gap-10 sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center border-gray-100">
                        <button
                            className="cursor-pointer rounded-l bg-[#f6e6da]  py-1 px-3.5 duration-100 text-gray-700 text-lg"
                            onClick={() => Decrement(id)}
                        >
                            -
                        </button>
                        <input
                            className="h-8 w-8 border bg-white text-center text-xs outline-none"
                            readOnly
                            type="number"
                            value={quantity}
                        />
                        <button
                            className="cursor-pointer rounded-r bg-[#f6e6da]  py-1 px-3 duration-100 text-gray-700 text-lg"
                            onClick={() => Increment(id)}
                        >
                            +
                        </button>
                    </div>
                    <div className="flex items-center space-x-4">
                        <p className="text-base">${price * quantity}</p>
                        <button onClick={() => removeCart(id)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="h-5 w-5 cursor-pointer
                                                 duration-150 text-black"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default SingleCart;
