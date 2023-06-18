import React from "react";
import Image from "../../assets/books-1515447_960_720.jpg";
import { MainNav } from "./include";
const MainAbout = () => {
    return (
        <main>
            <MainNav />
            <section className="mx-auto max-w-7xl mt-20 p-5">
                <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 about">
                    <div className="flex flex-col lg:flex-row justify-between gap-8">
                        <div className="w-full lg:w-5/12 flex flex-col justify-center">
                            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
                                About Us
                            </h1>
                            <p className="font-normal text-base leading-6 text-gray-400 capitalize ">
                                Welcome to "Books", your one-stop-shop for all
                                your book-related needs. We are a team of book
                                lovers who are passionate about sharing our love
                                for reading with the world. Our goal is to
                                provide our customers with a seamless online
                                shopping experience that makes it easy and
                                enjoyable to find the books they love.
                            </p>
                            <hr className="my-5" />
                            <p className="font-normal text-base leading-6 text-gray-400 capitalize ">
                                At "Books", we are committed to offering a wide
                                range of books from all genres, including
                                fiction, non-fiction, children's books, and much
                                more. Our inventory is constantly expanding to
                                include new and exciting titles, so be sure to
                                check back often to see what's new.
                            </p>
                        </div>
                        <div className="w-full lg:w-8/12 ">
                            <img
                                className="w-full h-full rounded-lg shadow-lg"
                                src={Image}
                                alt="A group of People"
                            />
                        </div>
                    </div>
                    <div className="mt-10">
                        <p className="font-normal text-base leading-6 text-gray-400 capitalize ">
                            We understand that shopping for books online can be
                            overwhelming, which is why we have created a
                            user-friendly website that makes it easy to find
                            what you're looking for. Our search function allows
                            you to filter your results by author, title, genre,
                            and more, so you can quickly and easily find the
                            books that interest you.
                        </p>
                        <hr className="my-5" />
                        <p className="font-normal text-base leading-6 text-gray-400 capitalize ">
                            In addition to our wide selection of books, we also
                            offer competitive pricing and fast, reliable
                            shipping. We want to make sure that you get the
                            books you want as quickly and affordably as
                            possible, so we offer a variety of shipping options
                            to suit your needs.
                        </p>
                        <hr className="my-5" />
                        <p className="font-normal text-base leading-6 text-gray-400 capitalize ">
                            At [Your Online Bookstore], we believe that reading
                            is one of life's greatest pleasures, and we are
                            dedicated to helping our customers discover new
                            books and authors that they will love. Whether
                            you're an avid reader or just looking for something
                            new to read, we have something for everyone.
                        </p>
                        <hr className="my-5" />
                        <p className="font-normal text-base leading-6 text-gray-400 capitalize ">
                            Thank you for choosing "Books" as your go-to
                            destination for all your book-related needs. We look
                            forward to serving you and helping you find your
                            next great read.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MainAbout;
