import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axiosClient from "../server/axiosClient";
import Load from "./Load";
import AOS from "aos";
import { useTranslation } from "react-i18next";
const ToDiscoverd = () => {
    const { t } = useTranslation();
    const [categories, setCategories] = useState([]);
    const [Loading, setLoad] = useState(false);
    const getCategories = async () => {
        setLoad(true);
        await axiosClient
            .get("/categories")
            .then(({ data }) => {
                if (data) {
                    setCategories(data.data);
                    setLoad(false);
                }
            })
            .catch((err) => {
                console.log(err);
                setLoad(false);
            });
    };
    useEffect(() => {
        getCategories();
    }, []);
    useEffect(() => {
        AOS.init({
            duration: 3000,
        });
    }, []);
    return (
        <section className="mx-auto mb-10 max-w-7xl p-5">
            <div className="text-center">
                <h1 className="text-2xl text-bold text-gray-700">
                    {t("To Discovered.1")}
                </h1>
            </div>
            <div className="flex flex-row overflow-x-auto overflow-y-hidden p-10 mx-auto scroll-container">
                {Loading ? (
                    <Load />
                ) : (
                    categories.map((category) => {
                        const { id, name, image } = category;
                        return (
                            <div
                                key={id}
                                className="flex-shrink-0 w-28 h-28 mr-8 rounded-full shadow-md mb-10"
                                data-aos="slide-up"
                            >
                                <Link
                                    to={`/categories/${name}`}
                                    className=" flex items-center justify-center rounded-full"
                                >
                                    <img
                                        src={`http://localhost:8000/images/categories/${image}`}
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

export default ToDiscoverd;
