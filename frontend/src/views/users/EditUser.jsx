import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../../server/axiosClient";
const EditUser = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        address: "",
        phone: "",
    });
    const getUser = async () => {
        await axiosClient
            .get("/user")
            .then(({ data }) => {
                if (data) {
                    setUser(data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const handleEdit = async (ev) => {
        ev.preventDefault();
        await axiosClient
            .put("/edituser", user)
            .then(({ data }) => {
                if (data) {
                    navigate("/account");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        getUser();
    }, []);
    return (
        <section className=" py-1 bg-blueGray-50 mt-24">
            <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
                {/* Container */}
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                    {/* Head */}
                    <div className="rounded-t bg-white mb-0 px-6 py-6">
                        <div className="text-center flex justify-between">
                            <h6 className="text-blueGray-700 text-xl font-bold">
                                User Information
                            </h6>
                            <Link
                                to="/account"
                                className="bg-[#d8c2b0] text-white  font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                            >
                                Back
                            </Link>
                        </div>
                    </div>
                    {/* Form */}
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <form className="form" onSubmit={handleEdit}>
                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                User Information
                            </h6>
                            <div className="flex flex-wrap">
                                {/* First name */}
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow  w-full ease-linear transition-all duration-150"
                                            value={
                                                user?.name?.substr(
                                                    0,
                                                    user.name?.indexOf(" ") + 1
                                                ) ?? ""
                                            }
                                            disabled
                                        />
                                    </div>
                                </div>
                                {/* Last Name */}
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow  w-full ease-linear transition-all duration-150"
                                            value={
                                                user?.name?.substr(
                                                    user.name?.indexOf(" ") + 1
                                                ) ?? ""
                                            }
                                            disabled
                                        />
                                    </div>
                                </div>
                                {/* Full-Name */}
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Full-Name
                                        </label>
                                        <input
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow   w-full ease-linear transition-all duration-150"
                                            value={user.name}
                                            onChange={(e) =>
                                                setUser({
                                                    ...user,
                                                    name: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                                {/* Email */}
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow  w-full ease-linear transition-all duration-150"
                                            value={user?.email ?? ""}
                                            onChange={(e) =>
                                                setUser({
                                                    ...user,
                                                    email: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                            </div>

                            <hr className="mt-6 border-b-1 border-blueGray-300" />

                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                Contact & Shippeng Information
                            </h6>
                            <div className="flex flex-wrap">
                                {/* Address */}
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow  w-full ease-linear transition-all duration-150"
                                            value={user?.address ?? "Not Set"}
                                            onChange={(e) =>
                                                setUser({
                                                    ...user,
                                                    address: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                                {/* Phone */}
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Phone
                                        </label>
                                        <input
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow  w-full ease-linear transition-all duration-150"
                                            value={user?.phone ?? "Not Set"}
                                            onChange={(e) =>
                                                setUser({
                                                    ...user,
                                                    phone: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                                {/* City */}
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow  w-full ease-linear transition-all duration-150"
                                            value={
                                                user?.address?.substr(
                                                    0,
                                                    user.address?.indexOf(",")
                                                ) ?? ""
                                            }
                                            disabled
                                        />
                                    </div>
                                </div>
                                {/* Code Postal */}
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Postal Code
                                        </label>
                                        <input
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow  w-full ease-linear transition-all duration-150"
                                            value={
                                                user?.address?.substr(
                                                    user.address?.indexOf(",") +
                                                        1
                                                ) ?? ""
                                            }
                                            disabled
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="block bg-[#d8c2b0] text-gray-700 text-center w-full text-sm font-semibold rounded-lg focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
                            >
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EditUser;
