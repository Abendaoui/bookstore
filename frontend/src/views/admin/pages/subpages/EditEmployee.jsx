import React, { useState, useEffect } from "react";
import axiosClient from "../../../../server/axiosClient";
import { useNavigate, useParams, Link } from "react-router-dom";
const EditEmployee = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        address: "",
        role: "",
        phone: "",
        image: "",
    });
    async function getEmployee() {
        await axiosClient
            .get(`/users/${id}`)
            .then(({ data }) => {
                if (data) {
                    setEmployee(data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
    const handleSubmit = async (ev) => {
        ev.preventDefault();
        await axiosClient
            .put(`/users/${id}`, employee)
            .then(({ data }) => {
                if (data) {
                    navigate("/dashboard/employees");
                }
            })
            .catch((error) => {
                const response = error.response;
                if (response && response.status === 422) {
                    console.log(response.data.errors);
                }
            });
    };

    useEffect(() => {
        getEmployee();
    }, []);
    return (
        <section className="mx-auto mt-2 max-w-5xl bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-center text-gray-600 text-xl">
                Add New Employee
            </h1>
            <form
                className="mt-8"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
            >
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    {/* UserName */}
                    <div>
                        <label
                            htmlFor="username"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Employee Full Name
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#c5a992] focus:border-[#c5a992] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#c5a992]dark:focus:border-[#c5a992]"
                            required
                            autoFocus
                            value={employee.name}
                            onChange={(e) =>
                                setEmployee({
                                    ...employee,
                                    name: e.target.value,
                                })
                            }
                        />
                    </div>
                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Employee Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#c5a992] focus:border-[#c5a992] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#c5a992] dark:focus:border-[#c5a992]"
                            required
                            value={employee.email}
                            onChange={(e) =>
                                setEmployee({
                                    ...employee,
                                    email: e.target.value,
                                })
                            }
                        />
                    </div>
                    {/* Address */}
                    <div>
                        <label
                            htmlFor="address"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Employee Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#c5a992] focus:border-[#c5a992] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#c5a992]dark:focus:border-[#c5a992]"
                            required
                            value={employee.address}
                            onChange={(e) =>
                                setEmployee({
                                    ...employee,
                                    address: e.target.value,
                                })
                            }
                        />
                    </div>
                    {/* Role */}
                    <div>
                        <label
                            htmlFor="role"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Employee Role
                        </label>
                        <input
                            type="text"
                            id="role"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#c5a992] focus:border-[#c5a992] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#c5a992]dark:focus:border-[#c5a992]"
                            required
                            value={employee.role}
                            onChange={(e) =>
                                setEmployee({
                                    ...employee,
                                    role: e.target.value,
                                })
                            }
                        />
                    </div>
                    {/* Phone Number */}
                    <div>
                        <label
                            htmlFor="phone"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Phone number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#c5a992] focus:border-[#c5a992] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#c5a992] dark:focus:border-[#c5a992]"
                            required
                            value={employee.phone}
                            onChange={(e) =>
                                setEmployee({
                                    ...employee,
                                    phone: e.target.value,
                                })
                            }
                        />
                    </div>
                    {/* Profile */}
                    <div className="col-span-full">
                        <label
                            htmlFor="cover-photo"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Cover photo
                        </label>
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <img
                                src={`http://localhost:8000/images/users/${employee.profile}`}
                                className="w-36"
                            />
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

export default EditEmployee;
