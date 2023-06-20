import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <section class="h-screen w-full flex flex-col justify-center items-center bg-[#ead9cb]">
            <h1 class="text-9xl font-extrabold text-white tracking-widest">
                404
            </h1>
            <div class="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>
            <button class="mt-5">
                <a class="relative inline-block text-sm font-medium text-gray-700 group active:text-orange-500 focus:outline-none focus:ring">
                    <span class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

                    <span class="relative block px-8 py-3 bg-[#ead9cb]  border border-current">
                        <Link to="/" className="text-gray-700">
                            Go Home
                        </Link>
                    </span>
                </a>
            </button>
        </section>
    );
};

export default NotFound;
