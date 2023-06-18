import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ link, label }) => {
    return (
        <article className="text-right ml-5 py-1 px-3 bg-[#e5d3c4] w-fit rounded-lg  my-3">
            <Link
                to={`/dashboard/${link}`}
                className="flex gap-1 text-white capitalize"
            >
                <span>{label}</span>
                <span className="flex justify-center items-center">
                    {" "}
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
                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </span>
            </Link>
        </article>
    );
};

export default LinkButton;
