import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <section className="mx-auto max-w-4xl mt-16 p-3 rounded-lg">
            <div className="lg:flex flex-row overflow-x-auto hidden overflow-y-hidden p-2 ml-2 gap-12 mx-auto scroll-container">
                <div className="flex-shrink-0">
                    <Link className="text-md cursor-pointer underline">
                        Special Offer
                    </Link>
                </div>
                {/*  */}
                <div className="flex-shrink-0">
                    <Link className="text-md  underline">New Books</Link>
                </div>
                <div className="flex-shrink-0">
                    <Link className="text-md  underline">Best Seller</Link>
                </div>
                <div className="flex-shrink-0">
                    <Link className="text-md  underline">Popular</Link>
                </div>
                <div className="flex-shrink-0">
                    <Link className="text-md  underline">Kids</Link>
                </div>
                <div className="flex-shrink-0">
                    <Link className="text-md  underline">Arabic</Link>
                </div>
                <div className="flex-shrink-0">
                    <Link className="text-md  underline">Adults</Link>
                </div>
            </div>
            <hr />
        </section>
    );
};

export default Categories;
