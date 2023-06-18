import React, { Fragment, useState, useEffect } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import {
    HiOutlineBell,
    HiOutlineSearch,
    HiOutlineChatAlt,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import classNames from "classnames";
import axiosClient from "../../../../server/axiosClient";
import { useStateContext } from "../../../../context/ContextProvider";
export default function Header() {
    const { setAdminToken, setUser } = useStateContext();
    const [info, setInfo] = useState({});
    const handleLogout = async () => {
        await axiosClient
            .post("/logout")
            .then(() => {
                setUser({});
                setAdminToken(null);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const getUser = async () => {
        await axiosClient
            .get("/user")
            .then(({ data }) => {
                setInfo(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        getUser();
    }, []);
    return (
        <div className="bg-[#ebe1d9] h-16 px-4 flex items-center border-b border-gray-200 justify-between shadow-lg">
            {/* input */}
            <div className="relative">
                <HiOutlineSearch
                    fontSize={20}
                    className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2"
                />
                <input
                    type="text"
                    placeholder="Search..."
                    className="text-sm focus:outline-none active:outline-none border border-gray-300 w-[24rem] h-10 pl-11 pr-4 rounded-xl"
                />
            </div>
            <div className="flex items-center gap-2 mr-2">
                <Menu as="div" className="relative">
                    <div>
                        <Menu.Button className="ml-2 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
                            <span className="sr-only">Open user menu</span>
                            <div
                                className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                                style={{
                                    backgroundImage: `url(http://localhost:8000/images/users/${info.profile})`,
                                }}
                            ></div>
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        to="/dashboard/profile"
                                        className={classNames(
                                            active && "bg-gray-100",
                                            "active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200"
                                        )}
                                    >
                                        Your Profile
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={handleLogout}
                                        className={classNames(
                                            active && "bg-gray-100",
                                            "active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200"
                                        )}
                                    >
                                        Sign out
                                    </button>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    );
}
