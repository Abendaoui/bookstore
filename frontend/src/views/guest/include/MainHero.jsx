import axiosClient from "../../../server/axiosClient";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const MainHero = () => {
    const { t } = useTranslation();
    const [index, setIndex] = useState(0);
    const [randombooks, setRandombooks] = useState([]);
    const next = () => {
        if (index === randombooks.length - 1) {
            setIndex(0); // Redirect to the first book
        } else {
            setIndex(index + 1);
        }
    };
    const prev = () => {
        if (index === 0) {
            setIndex(randombooks.length - 1); // Redirect to the last book
        } else {
            setIndex(index - 1);
        }
    };

    async function getRandomBooks() {
        await axiosClient
            .get("/mainrandombooks")
            .then(({ data }) => {
                setRandombooks(data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    useEffect(() => {
        getRandomBooks();
    }, []);
    const scrollDown = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight * 0.15,
            behavior: "smooth",
        });
    };
    return (
        <>

            <section className="hero px-4 py-14 mx-auto lg:max-w-6xl md:px-24 lg:px-8 lg:py-20 relative mt-6">
                {/* Effect */}
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                    <svg
                        className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
                        viewBox="0 0 1155 678"
                    >
                        <path
                            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                            fillOpacity=".3"
                            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                        />
                        <defs>
                            <linearGradient
                                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                                x1="1155.49"
                                x2="-78.208"
                                y1=".177"
                                y2="474.645"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#c5a992" />
                                <stop offset="1" stopColor="#c5a992" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                {/* Hero Content */}
                <section
                    className={`px-4 py-16 mx-auto sm:max-w-xl md:max-w-full relative md:px-24 lg:px-8 lg:py-20`}
                >
                    {/* Show Book Section */}
                    {randombooks.length === 0 ? (
                        <section className="flex px-10 gap-40 flex-col lg:flex-row items-center">
                            {/* Details */}
                            <div class="animate-pulse flex w-3/6 ml-10">
                                <div class="flex-1 space-y-6 py-1">
                                    <div class="h-2 bg-slate-500 rounded"></div>
                                    <div class="space-y-3">
                                        <div class="grid grid-cols-3 gap-4">
                                            <div class="h-2 bg-slate-500 rounded col-span-2"></div>
                                            <div class="h-2 bg-slate-500 rounded col-span-1"></div>
                                            <div class="h-2 bg-slate-500 rounded col-span-1"></div>
                                            <div class="h-2 bg-slate-500 rounded col-span-2"></div>
                                        </div>
                                        <div class="h-2 bg-slate-500 rounded"></div>
                                    </div>
                                </div>
                            </div>
                            {/* Image */}
                            <div className="w-3/6 animate-pulse">
                                <div class="rounded-xl bg-slate-500 h-[350px] w-64"></div>
                            </div>
                        </section>
                    ) : (
                        <div className="flex flex-col items-center justify-between w-full mb-5 lg:flex-row">
                            {/* <div className="book-shelf mb-5"></div> */}
                            {/* Info */}
                            <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                                <div className="max-w-xl mb-6 text-center ml-0 lg:ml-10">
                                    <div>
                                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-teal-accent-400 text-[#c5a992] rounded-full">
                                            {t("Books For You.1")}
                                        </p>
                                    </div>
                                    <h2 className="font-mono lg:text-2xl font-bold tracking-tight text-gray-700 text-lg sm:leading-none max-w-lg mb-6">
                                        {randombooks[index].title}
                                    </h2>
                                    <p className="text-base text-gray-500">
                                        {randombooks[index].description}
                                    </p>
                                </div>
                                <div className="flex justify-around items-start space-x-3">
                                    <Link
                                        to={`/home/${randombooks[index].slug}`}
                                        className="capitalize border border-dashed border-[#c5a992] hover:bg-[#f6e6da] hover:text-gray-700 transition-colors text-gray-900 flex gap-3 p-3 rounded-lg mt-5 text-sm font-semibold"
                                    >
                                        {t("read more.1")}
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
                                                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                            />
                                        </svg>
                                    </Link>
                                    <Link
                                        to="/login"
                                        className="capitalize border border-dashed border-[#c5a992] hover:bg-[#f6e6da] text-gray-700 transition-colors flex gap-3 p-3 rounded-lg mt-5 text-sm font-semibold"
                                    >
                                        {t("Shop Now.1")}
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
                                </div>
                            </div>
                            {/* Cover */}
                            <div className="flex items-center justify-center lg:w-1/2">
                                <div className="w-[300px] h-[400px]">
                                    <img
                                        className="object-contain rounded-xl w-full h-full"
                                        src={`http://localhost:8000/images/books/${randombooks[index].cover}`}
                                        alt="cover"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                    {/* Down Button */}
                    <button
                        aria-label="Scroll down"
                        className="flex items-center mt-5 justify-center w-10 h-10 mx-auto text-gray-600 hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 duration-300 transform border border-gray-400 rounded-full hover:shadow hover:scale-110 scroll-down"
                        onClick={scrollDown}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="currentColor"
                        >
                            <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
                        </svg>
                    </button>
                    {/* Button Control */}
                    <button
                        className="ab absolute top-[60%] left-5 lg:top-[50%] lg-left-11 bg-[#ead2be] p-2 rounded-[50%] text-gray-700"
                        onClick={prev}
                    >
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 19.5L8.25 12l7.5-7.5"
                                />
                            </svg>
                        </span>
                    </button>
                    <button
                        className="ab absolute top-[60%] right-6 lg:top-[50%] lg:right-11 bg-[#ead2be] p-2 rounded-[50%] text-gray-700"
                        onClick={next}
                    >
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </span>
                    </button>
                </section>
                {/* Effect */}
                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                    <svg
                        className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                        viewBox="0 0 1155 678"
                    >
                        <path
                            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                            fillOpacity=".3"
                            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                        />
                        <defs>
                            <linearGradient
                                id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                                x1="1155.49"
                                x2="-78.208"
                                y1=".177"
                                y2="474.645"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#c5a992" />
                                <stop offset="1" stopColor="#c5a992" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </section>
        </>
    );
};

export default MainHero;
