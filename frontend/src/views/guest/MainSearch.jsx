import React, { useState, useEffect } from "react";
import axiosClient from "../../server/axiosClient";
import { Link } from "react-router-dom";
import { MainNav } from "./include";
const MainSearch = () => {
    const [searchValue, setSearchValue] = useState("");
    const [books, setBooks] = useState([]);
    const [load, setLoad] = useState(false);

    const times = [1, 2, 3, 4, 5, 6, 7, 8];
    const fetchBooks = async () => {
        setLoad(true);
        try {
            const { data } = await axiosClient.get(
                `/mainsearch/${searchValue}`
            );
            setBooks(data.data);
            setLoad(false);
        } catch (err) {
            console.log(err);
            setLoad(false);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, [searchValue]);
    return (
        <>
            <MainNav />
            <section className=" dark:bg-gray-900 mx-auto max-w-7xl mt-28 mb-20">
                <article className="mx-auto max-w-xl mt-16">
                    <form class="flex items-center">
                        <label for="simple-search" class="sr-only">
                            Search
                        </label>
                        <div class="relative w-full">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg
                                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                            <input
                                type="text"
                                id="simple-search"
                                class="bg-gray-50 border py-3 border-gray-300 shadow-lg text-gray-900 text-sm rounded-lg focus:ring-[#c5a992] focus:border-[#c5a992] block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#c5a992] dark:focus:border-[#c5a992]"
                                placeholder="Search"
                                onChange={(e) => setSearchValue(e.target.value)}
                                value={searchValue}
                                required
                            />
                        </div>
                    </form>
                </article>
                {load ? (
                    <article className="container px-6 py-8 mx-auto animate-pulse">
                        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
                            {times.map((time) => {
                                return (
                                    <div className="w-full" key={time}>
                                        <div className="h-[310px]  relative bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                                        <h1 className="w-56 h-2 mt-4 text-center font-bold bg-gray-300 rounded-lg dark:bg-gray-600"></h1>
                                        <p className="w-24 h-2 mt-5 bg-gray-300 rounded-lg dark:bg-gray-600 mx-auto"></p>
                                    </div>
                                );
                            })}
                        </div>
                    </article>
                ) : (
                    <article className="container px-6 py-8 mx-auto">
                        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
                            {books.map((book) => {
                                const { id, title, stock, slug, cover } = book;
                                return (
                                    <Link
                                        className="w-full"
                                        key={id}
                                        to={`/books/${slug}`}
                                    >
                                        <div className="h-[310px] rounded-lg relative">
                                            <img
                                                src={`http://localhost:8000/images/books/${cover}`}
                                                alt=""
                                                className="object-cover rounded-t-lg h-[300px] shadow-xl"
                                            />
                                        </div>
                                        <h1 className="w-40 h-2 mt-4 text-center font-bold capitalize">
                                            {title && title.substr(0, 7)}...
                                        </h1>
                                        <p className="w-24 h-2 mt-5 text-green-500 mx-auto">
                                            {stock > 0
                                                ? "Avalaible"
                                                : "Coming Soon"}
                                        </p>
                                    </Link>
                                );
                            })}
                        </div>
                    </article>
                )}
            </section>
        </>
    );
};

export default MainSearch;
