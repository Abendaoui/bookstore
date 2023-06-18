import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../server/axiosClient";
import Load from "./Load";
import AOS from "aos";
import { useTranslation } from "react-i18next";
const ByAuthor = () => {
    const {t} = useTranslation()
    const [Loading, setLoad] = useState(false);
    const [authors, setAuthors] = useState([]);
    const getAuthor = async () => {
        setLoad(true);
        await axiosClient
            .get("/authors")
            .then(({ data }) => {
                if (data) {
                    setAuthors(data.data);
                    setLoad(false);
                }
            })
            .catch((err) => {
                console.log(err);
                setLoad(false);
            });
    };
    useEffect(() => {
        getAuthor();
    }, []);
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);
    return (
        <section className="mx-auto mb-10 max-w-7xl p-5">
            <div className="text-center">
                <h1 className="text-2xl text-bold text-gray-700">{t("By Author.1")}</h1>
            </div>
            <div className="flex flex-row overflow-x-auto overflow-y-hidden p-10 mx-auto scroll-container">
                {Loading ? (
                    <Load />
                ) : (
                    authors.map((author) => {
                        const { id, name, profile } = author;
                        return (
                            <div
                                key={id}
                                className="flex-shrink-0 w-28 h-28 mr-8 rounded-full shadow-md"
                                data-aos="zoom-in"
                            >
                                <Link
                                    to={`/authors/${name}`}
                                    className=" flex items-center justify-center rounded-full"
                                >
                                    <img
                                        src={`http://localhost:8000/images/authors/${profile}`}
                                        className="rounded-full w-28 h-28"
                                    />
                                </Link>
                                <div className="p-2 mt-2 text-center">
                                    <h3 className="text-lg font-medium capitalize text-gray-700">
                                        {name}
                                    </h3>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </section>
    );
};

export default ByAuthor;
