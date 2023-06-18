import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../../../../server/axiosClient";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { langaugesList } from "../../lib/constants/index";
const AddProduct = () => {
    const navigate = useNavigate();
    const [authors, setAuthors] = useState([]);
    const [categories, setCategories] = useState([]);
    const [cover, setCover] = useState("");
    const title = useRef();
    const author_id = useRef();
    const category_id = useRef();
    const description = useRef();
    const price = useRef();
    const nbPages = useRef();
    const pubDate = useRef();
    const language = useRef();
    const quantity = useRef();
    const handleCover = (ev) => {
        setCover(ev.target.files[0]);
    };
    const handleCreate = async (ev) => {
        ev.preventDefault();
        const formData = new FormData();
        formData.append("title", title.current.value);
        formData.append("author_id", author_id.current.value);
        formData.append("category_id", category_id.current.value);
        formData.append("description", description.current.value);
        formData.append("cover", cover);
        formData.append("price", price.current.value);
        formData.append("nb_pages", nbPages.current.value);
        formData.append("published_date", pubDate.current.value);
        formData.append("language", language.current.value);
        formData.append("stock", quantity.current.value);
        axiosClient
            .postForm("/books", formData)
            .then(({ data }) => {
                if (data) {
                    navigate("/dashboard/products");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const getAuthors = async () => {
        await axiosClient
            .get("/getauthors")
            .then(({ data }) => {
                setAuthors(data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const getCategories = async () => {
        await axiosClient
            .get("/getcategories")
            .then(({ data }) => {
                setCategories(data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        getAuthors();
        getCategories();
    }, []);
    return (
        <section className="mx-auto mt-2 max-w-5xl bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-center text-gray-600 text-xl">Add New Book</h1>
            <form
                onSubmit={handleCreate}
                className=""
                encType="multipart/form-data"
            >
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label className=""> Book Title </label>
                        <input
                            type="text"
                            placeholder="Book Title"
                            ref={title}
                            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                        />
                    </div>
                    <div>
                        <label className=""> Book Language </label>
                        <input
                            type="text"
                            placeholder="Book Language"
                            ref={language}
                            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                        />
                    </div>
                    <div>
                        <label className=""> Author </label>
                        <select
                            id="authors"
                            ref={author_id}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            {authors &&
                                authors.map((author) => {
                                    return (
                                        <option
                                            key={author.id}
                                            value={author.id}
                                            className="capitalize"
                                        >
                                            {author.name}
                                        </option>
                                    );
                                })}
                        </select>
                        <small>
                            <Link to="/dashboard/products/author/add">
                                Add Author
                            </Link>
                        </small>
                    </div>
                    <div>
                        <label className=""> Category </label>
                        <select
                            ref={category_id}
                            id="category"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            {categories &&
                                categories.map((category) => {
                                    return (
                                        <option
                                            key={category.id}
                                            value={category.id}
                                        >
                                            {category.name}
                                        </option>
                                    );
                                })}
                        </select>
                        <small>
                            <Link to="/dashboard/products/categorie/add">
                                Add Category
                            </Link>
                        </small>
                    </div>
                    <div>
                        <label className=""> Description </label>
                        <textarea
                            placeholder="About Book"
                            rows="5"
                            ref={description}
                            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 resize-none"
                        ></textarea>
                    </div>
                    <div>
                        <label className=""> Price </label>
                        <input
                            type="number"
                            ref={price}
                            pattern="[0-9]+.[0-9]{1,2}"
                            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                        />
                    </div>
                    <div>
                        <label className=""> Number Of Pages </label>
                        <input
                            type="number"
                            ref={nbPages}
                            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                        />
                    </div>
                    <div>
                        <label className=""> Publishe Date </label>
                        <input
                            type="date"
                            ref={pubDate}
                            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                        />
                    </div>
                    <div className="col-span-full">
                        <label className=""> Quantity </label>
                        <input
                            type="number"
                            ref={quantity}
                            pattern="[0-9]+.[0-9]{1,2}"
                            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                        />
                    </div>
                    <div className="col-span-full">
                        <label
                            htmlFor="cover-photo"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Cover photo
                        </label>
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <div className="text-center">
                                <PhotoIcon
                                    className="mx-auto h-5 w-12 text-gray-300"
                                    aria-hidden="true"
                                />
                                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                    <label
                                        htmlFor="file-upload"
                                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                    >
                                        <input
                                            type="file"
                                            onChange={handleCover}
                                            className="mt-2 h-12 w-full rounded-md px-3"
                                        />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs leading-5 text-gray-600">
                                    PNG, JPG, JPEG up to 2MB
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    type="submit"
                    className="text-white bg-[#c5a992] hover:bg-[#c5a992] focus:ring-4 focus:outline-none focus:ring-[#c5a992] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#c5a992] dark:hover:bg-[#c5a992] dark:focus:ring-[#c5a992]"
                >
                    Submit
                </button>
            </form>
        </section>
    );
};

export default AddProduct;
