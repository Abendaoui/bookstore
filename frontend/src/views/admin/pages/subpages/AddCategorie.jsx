import React, { useState, useRef } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import axiosClient from "../../../../server/axiosClient";
import { useNavigate } from "react-router-dom";
const AddCategorie = () => {
    const navigate = useNavigate();
    const name = useRef();
    const [image, setImage] = useState();
    const handleImage = (ev) => {
        setImage(ev.target.files[0]);
    };
    const handleCreate = (ev) => {
        ev.preventDefault();
        const formData = new FormData();
        formData.append("name", name.current.value);
        if (image) {
            formData.append("image", image);
        }
        axiosClient
            .post("/categories", formData)
            .then(({ data }) => {
                if (data) {
                    navigate("/dashboard/products/add");
                }
            })
            .catch((error) => {
                const response = error.response;
                if (response && response.status === 422) {
                    console.log(response.data.errors);
                }
            });
    };
    return (
        <section className="mx-auto mt-2 max-w-5xl bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-center text-gray-600 text-xl">
                Add New Category
            </h1>
            <form onSubmit={handleCreate} encType="multipart/form-data">
                <div>
                    <label htmlFor="name"> Category Name </label>
                    <input
                        type="text"
                        ref={name}
                        placeholder="Category Name"
                        className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                    />
                </div>
                <div className="col-span-full">
                    <label
                        htmlhtmlFor="cover-photo"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Author photo
                    </label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-8">
                        <div className="text-center">
                            <PhotoIcon
                                className="mx-auto h-2 w-12 text-gray-300"
                                aria-hidden="true"
                            />
                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                <label
                                    htmlhtmlFor="file-upload"
                                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                >
                                    <input
                                        type="file"
                                        name="profile"
                                        onChange={handleImage}
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

                <button
                    type="submit"
                    className="text-white bg-[#c5a992] hover:bg-[#c5a992] focus:ring-4 focus:outline-none focus:ring-[#c5a992] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#c5a992] dark:hover:bg-[#c5a992] dark:focus:ring-[#c5a992] mt-5"
                >
                    Submit
                </button>
            </form>
        </section>
    );
};

export default AddCategorie;
