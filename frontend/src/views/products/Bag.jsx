import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../server/axiosClient";
import SingleCart from "./SingleCart";
import Load from "../../components/Load";
const Bag = () => {
    const [bags, setBags] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const [total, setTotal] = useState(0);
    const deleteAll = async () => {
        setIsLoad(true);
        await axiosClient
            .delete("/removeAllCart")
            .then(({ data }) => {
                if (data) {
                    setIsLoad(false);
                    getBag();
                }
            })
            .catch((error) => {
                console.log(error);
                setIsLoad(false);
            });
    };
    const getBag = async () => {
        await axiosClient
            .get("/carts")
            .then(({ data }) => {
                setBags(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    async function getTotal() {
        await axiosClient
            .get("/total")
            .then(({ data }) => {
                setTotal(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    useEffect(() => {
        getBag();
        getTotal();
    }, [bags]);
    return (
        <section className="mx-auto max-w-6xl mt-10 pt-20 mb-10">
            <h1 className="mb-10 text-center text-4xl font-bold">
                Your Order Items
            </h1>
            <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                <article className="rounded-lg md:w-2/3">
                    {bags.length > 0 ? (
                        bags.map((bag) => {
                            return (
                                <SingleCart
                                    key={bag.id}
                                    {...bag}
                                    getBag={getBag}
                                />
                            );
                        })
                    ) : (
                        <>
                            <div className="justify-center items-center rounded-lg border p-6 shadow-md h-[200px] flex">
                                <h1
                                    className="text-gray-700 text-3xl"
                                    style={{ fontWeight: 900 }}
                                >
                                    Your Cart Is Empty
                                </h1>
                            </div>
                        </>
                    )}
                    {bags.length > 0 && (
                        <div className="mt-3 text-center">
                            <button
                                className="capitalize w-full text-center shadow-lg border border-dashed border-[#c5a992] hover:bg-[#f6e6da] hover:text-gray-700 transition-colors flex gap-3 p-3 rounded-lg mt-5 text-sm font-semibold"
                                onClick={deleteAll}
                            >
                                <span className="w-fit mx-auto">
                                    Remove All
                                </span>
                            </button>
                        </div>
                    )}
                </article>
                <div className="mt-6 h-full rounded-lg border p-6 shadow-md md:mt-0 md:w-1/3">
                    <hr className="my-4" />
                    <div className="flex justify-between">
                        <p className="text-lg font-bold">Total</p>
                        <div className="">
                            <p className="mb-1 text-lg font-bold">
                                ${total.toFixed(2)}
                            </p>
                            <p className="text-sm text-gray-700">
                                without Shipping
                            </p>
                        </div>
                    </div>
                    {bags.length > 0 && (
                        <Link
                            to="/checkout"
                            className="capitalize w-full text-center border border-dashed border-[#c5a992] hover:bg-[#f6e6da] text-gray-700 transition-colors flex gap-3 p-3 rounded-lg mt-5 text-sm font-semibold"
                        >
                            <span className="w-fit mx-auto">Check out</span>
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Bag;
