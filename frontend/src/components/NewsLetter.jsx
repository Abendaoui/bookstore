import React from "react";
import { useTranslation } from "react-i18next";
const NewsLetter = () => {
    const { t } = useTranslation();
    return (
        <section className="mx-auto max-w-6xl my-10 mt-5 flex flex-col rounded-2xl borde p-4 shadow-lg sm:flex-row gap-10">
            <div className="">
                <img
                    className="h-[18rem] w-[30rem] rounded-2xl object-cover mx-auto"
                    src="https://cdn.pixabay.com/photo/2017/08/06/22/01/books-2596809_960_720.jpg"
                    alt=""
                />
            </div>
            <div className="py-8 pr-8">
                <p className="text-3xl font-medium text-gray-800">
                    {t("Subscribe to Newsletter.1")}
                </p>
                <p className="mb-4 text-gray-500">
                    {t("To Get Notification About Latest Books And Updates.1")}
                </p>
                <div className="flex">
                    <div className="mr-1 w-full">
                        <input
                            type="email"
                            className="placeholder:text-gray-400 h-12 w-full rounded-md bg-gray-200 px-4 font-medium focus:outline-none focus:ring-1 focus:ring-[#d4c1b1]"
                            placeholder="Enter your email"
                        />
                    </div>
                    <button
                        className="shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-[#d4c1b1]
                     text-gray-700 hover:text-white hover:bg-[#dfd0c3] transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-6 w-6"
                        >
                            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default NewsLetter;
