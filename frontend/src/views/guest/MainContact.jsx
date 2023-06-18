import React, { useRef } from "react";
import { MainNav } from "./include";
const MainContact = () => {
    return (
        <main>
            <MainNav />
            <section>
                <div className="w-full flex items-center justify-center my-12">
                    <form className="absolute top-40  shadow-lg rounded-lg py-10 border-gray-200 border-2   lg:px-20 px-8">
                        <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
                            Let Us Know EveryThing You Need
                        </p>
                        <div className="md:flex items-center mt-12">
                            <div className="md:w-72 flex flex-col">
                                <input
                                    type="text"
                                    className="text-base leading-none text-gray-900 p-3
                                focus:outline-[#c5a992] mt-4 border rounded-lg border-gray-200
                                placeholder-gray-500"
                                    placeholder="Your name"
                                    autoFocus
                                />
                            </div>
                            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                                <input
                                    placeholder="Your Email"
                                    type="email"
                                    className="text-base leading-none text-gray-900 p-3
                                 focus:outline-[#c5a992] mt-4 border rounded-lg
                                border-gray-200 placeholder-gray-500"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="w-full flex flex-col mt-8">
                                <textarea
                                    placeholder="leave A Message"
                                    className="h-36 text-base leading-none text-gray-900 p-3
                                focus:outline-[#c5a992] mt-4 border rounded-lg border-gray-200 placeholder-gray-500 resize-none"
                                />
                            </div>
                        </div>
                        <p className="text-xs leading-3 text-gray-600 mt-4">
                            We Will Answer You So Soon
                        </p>
                        <div className="flex items-center justify-center w-full">
                            <button
                                type="submit"
                                className=" mt-3
						focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
						text-base
						flex
						items-center gap-5
						justify-center
                        border border-dashed border-[#c5a992] hover:bg-[#f6e6da]
						leading-none
						text-gray-700 rounded-lg shadow-lg
						w-full
						py-4 transition-colors
					"
                            >
                                Send
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    className="w-5 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default MainContact;
