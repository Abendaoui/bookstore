import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../server/axiosClient";
import SingleBook from "./SingleBook";
import Load from "./Load";
import { useTranslation } from "react-i18next";
const BooksContainer = () => {
    const {t} = useTranslation()
    const [Loading, setLoad] = useState(false);
    const [books, setBooks] = useState([]);
    const getPopularBooks = async () => {
        setLoad(true);
        await axiosClient
            .get("/books")
            .then(({ data }) => {
                if (data) {
                    setBooks(data);
                    setLoad(false);
                }
            })
            .catch((err) => {
                console.log(err);
                setLoad(false);
            });
    };
    useEffect(() => {
        getPopularBooks();
    }, []);
    return (
        <section className="mx-auto mb-10 max-w-7xl p-5">
            <div className="px-10 flex flex-col lg:flex-row justify-between">
                <div>
                    <h1 className="text-gray-700 text-2xl text-bold capitalize">
                        {t("Best Sell This Week.1")}
                    </h1>
                    <p className="text-base capitalize">
                        #{t("Discoverd Popular Books In This Month.1")}
                    </p>
                </div>
            </div>
            <div className="flex flex-row overflow-x-auto scroll-container p-3">
                {Loading ? (
                    <Load />
                ) : (
                    books.map((book) => {
                        return <SingleBook key={book.id} {...book} />;
                    })
                )}
            </div>
        </section>
    );
};

export default BooksContainer;
