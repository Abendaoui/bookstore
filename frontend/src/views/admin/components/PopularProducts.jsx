import classNames from "classnames";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../../server/axiosClient";

function PopularProducts() {
    const [books, setBooks] = useState([]);

    async function getBooks() {
        await axiosClient
            .get("/recentbook")
            .then(({ data }) => {
                setBooks(data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    useEffect(() => {
        getBooks();
    }, []);
    return (
        <div className="w-[20rem] bg-white p-4 rounded-sm border border-gray-200">
            <strong className="text-gray-700 font-medium">
                Recent Products
            </strong>
            <div className="mt-4 flex flex-col gap-3">
                {books.map((book) => {
                    const { id, title, cover, stock, price } = book;
                    return (
                        <Link
                            key={id}
                            to={`/book/${id}`}
                            className="flex items-start hover:no-underline"
                        >
                            <div className="w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm">
                                <img
                                    className="w-full h-full object-cover rounded-sm"
                                    src={`http://localhost:8000/images/books/${cover}`}
                                    alt={title}
                                />
                            </div>
                            <div className="ml-4 flex-1">
                                <p className="text-sm text-gray-800">
                                    {title && title.substr(0, 15)}...
                                </p>
                                <span
                                    className={classNames(
                                        stock === 0
                                            ? "text-red-500"
                                            : stock > 50
                                            ? "text-green-500"
                                            : "text-orange-500",
                                        "text-xs font-medium"
                                    )}
                                >
                                    {stock === 0
                                        ? "Out of Stock"
                                        : stock + " in Stock"}
                                </span>
                            </div>
                            <div className="text-xs text-gray-400 pl-1.5">
                                ${price}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default PopularProducts;
