import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axiosClient from "../../server/axiosClient";
import img from "../../assets/logo.png";
const Category = () => {
    const [books, setBooks] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const getBooksByCategory = async () => {
        axiosClient
            .get(`/category/${category}`)
            .then(({ data }) => {
                setBooks(data.categories);
                // console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        getBooksByCategory();
    }, []);
    const { category } = useParams();
    return (
        <section className="px-4 py-14 mx-auto lg:max-w-6xl md:px-24 lg:px-8 lg:py-20 relative mt-6">
            <div
                className="relative h-56 rounded-b-lg bg-cover bg-center bg-no-repeat shadow-lg
            bg-gradient-to-r from-[#dbcec2] to-[#ede4de]"
            >
                <div className="px-4 pt-8 pb-10 flex flex-col">
                    <div className="absolute inset-x-0 -bottom-10 mx-auto w-36 rounded-full border-8 border-white shadow-lg">
                        <img
                            className="mx-auto h-auto w-full rounded-full"
                            src={
                                books.length > 0 &&
                                `http://localhost:8000/images/categories/${books[0].image}`
                            }
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="text-center mt-10">
                <h1 className="text-gray-500 capitalize text-xl">{category}</h1>
            </div>
            <main className="grid grid-cols-2 gap-x-6 gap-y-10 mt-10 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-16 lg:grid-cols-4 lg:gap-x-4 lg:px-0">
                {books.length > 0 &&
                    books.map((book, i) => {
                        const { title, cover, slug, name } = book;
                        return (
                            <article
                                key={i}
                                className="flex-shrink-0 lg:w-64 w-60  mr-8 relative flex flex-col rounded-lg"
                            >
                                <div className="flex-shrink-0">
                                    <Link to={`/books/${slug}`}>
                                        <div className=" relative h-[310px] flex justify-center">
                                            <img
                                                src={`http://localhost:8000/images/books/${cover}`}
                                                alt="Book Title"
                                                className="object-cover rounded-t-lg h-[300px]"
                                            />
                                        </div>
                                    </Link>
                                    <div className="p-2">
                                        <h3 className="text-lg font-medium text-center text-gray-900">
                                            {title}
                                        </h3>
                                        <h5 className="text-base capitalize font-medium text-center text-gray-500">
                                            {name}
                                        </h5>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
            </main>
        </section>
    );
};

export default Category;
