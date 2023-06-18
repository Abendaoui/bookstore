import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { langBtn } from "../../../data/data";
import { useTranslation } from "react-i18next";
const MainNav = () => {
    const [isOpenLang, setIsOpenLang] = useState(false);
    const [isMenu, setIsMenu] = useState(false);
    const [scroll, setScroll] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const toggleLang = () => {
        setIsOpenLang(!isOpenLang);
    };
    const toggleTwo = () => setIsMenu(!isMenu);
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 100) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    const { t, i18n } = useTranslation();
    function handleChange(lang) {
        i18n.changeLanguage(lang);
    }
    return (
        <header
            className={`px-2 sm:px-4 py-2.5 mb-20 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 dark:border-gray-600 ${
                scroll ? "shadow-md opacity-95 bg-white transition-colors" : ""
            }`}
        >
            <nav className="">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* <!-- Mobile menu button--> */}
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                                onClick={toggleTwo}
                            >
                                <span className="sr-only">Open main menu</span>
                                {/* <!--
                                Icon when menu is closed.

                                Menu open: "hidden", Menu closed: "block"
                            --> */}
                                {!isMenu ? (
                                    <svg
                                        className="block h-6 w-6 text-[#C5A992]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                        />
                                    </svg>
                                ) : (
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
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                                <svg
                                    className="hidden h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center gap-72 sm:items-stretch sm:justify-start">
                            {/* Logo */}
                            <div className="flex flex-shrink-0 items-center">
                                <div className="block h-8 w-auto lg:hidden rounded-xl logo">
                                    <h1 className="text-xl">Books</h1>
                                </div>
                                <div className="hidden h-12 w-auto lg:block rounded-xl logo">
                                    <h1 className="text-xl">Books</h1>
                                </div>
                            </div>
                            {/* Desktop Menu */}
                            <div className="hidden sm:ml-6 sm:block menu">
                                <div className="flex space-x-4">
                                    <Link
                                        to="/home"
                                        className="text-[#C5A992] hover:text-gray-500  px-3 py-2 text-lg capitalize"
                                    >
                                        {t("home")}
                                    </Link>
                                    <Link className="relative mt-[5px] capitalize">
                                        <div>
                                            <button
                                                type="button"
                                                className="text-lg"
                                                onClick={() =>
                                                    setDropdown(!dropdown)
                                                }
                                            >
                                                {t("collection")}
                                            </button>
                                        </div>
                                        <div
                                            className={`absolute  z-10 mt-2 w-56 origin-top-right divide-y
                                             divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5
                                             focus:outline-none drop ${
                                                 !dropdown ? "hidden" : ""
                                             }`}
                                            role="menu"
                                        >
                                            <div className="py-1" role="none">
                                                <Link
                                                    to="/home/search"
                                                    className="text-gray-700 block px-4 py-2 text-sm"
                                                    role="menuitem"
                                                >
                                                    Search
                                                </Link>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link
                                        to="/aboutus"
                                        className="text-[#C5A992] hover:text-gray-500 px-3 py-2 text-lg capitalize"
                                    >
                                        {t("about")}
                                    </Link>
                                    <Link
                                        to="/contactus"
                                        className="text-[#C5A992] hover:text-gray-500 px-3 py-2 text-lg capitalize"
                                    >
                                        {t("contact")}
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Button */}
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            {/* <!-- Language dropdown --> */}
                            <div className="relative ml-3">
                                <div>
                                    <button
                                        type="button"
                                        className="flex justify-center items-center rounded-full text-gray-600 p-1 text-sm mr-1 hover:bg-[#d4c1b1]
                                                hover:text-white relative transition-colors"
                                        id="user-menu-button"
                                        aria-expanded="false"
                                        aria-haspopup="true"
                                        onClick={toggleLang}
                                    >
                                        <span className="sr-only">
                                            Open Language Dropdown
                                        </span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6 "
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div
                                    className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ${
                                        !isOpenLang ? "hidden" : "block"
                                    }`}
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="user-menu-button"
                                >
                                    {langBtn.map((btn) => {
                                        const { flag, label, langQuery } = btn;
                                        return (
                                            <button
                                                key={label}
                                                className="block w-full text-left px-4 py-2 text-sm text-[#C5A992] hover:bg-slate-100 relative"
                                                role="menuitem"
                                                id="user-menu-item-0"
                                                onClick={() =>
                                                    handleChange(langQuery)
                                                }
                                            >
                                                <div className="flex gap-2 items-center">
                                                    <img
                                                        src={flag}
                                                        className="w-4 h-4"
                                                    />
                                                    <span>{label}</span>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                            <button
                                type="button"
                                className="rounded-xl px-2 py-1 text-gray-700 bg-[#f6e6da] transition-colors "
                            >
                                <Link to="/register" className="text-gray-700">
                                    {t("Register.1")}
                                </Link>
                            </button>
                            <button
                                type="button"
                                className="rounded-xl px-2 py-1 text-gray-700 bg-[#f6e6da] transition-colors ml-5"
                            >
                                <Link to="/login" className="text-gray-700">
                                    {t("Login.1")}
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                <div
                    className={`sm:hidden ${
                        !isMenu ? "hidden" : "block"
                    } bg-white`}
                    id="mobile-menu"
                >
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                        <Link
                            to="/home"
                            className="text-[#C5A992] capitalize block hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
                        >
                            {t("home")}
                        </Link>
                        <Link
                            to="/about"
                            className="text-[#C5A992] capitalize hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                        >
                            {t("about")}
                        </Link>
                        <Link
                            to="/contact"
                            className="text-[#C5A992] capitalize hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                        >
                            {t("contact")}
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default MainNav;
