import React, { useState, useEffect } from "react";
import axiosClient from "../../../server/axiosClient";
import { Link } from "react-router-dom";

const Profile = () => {
    const [user, setUser] = useState({});
    const getUser = async () => {
        await axiosClient
            .get("/user")
            .then(({ data }) => {
                setUser(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        getUser();
    }, []);
    return (
        <section className="">
            <div className="max-w-5xl mx-auto my-20 bg-white rounded-lg shadow-md p-5">
                <img
                    className="w-32 h-32 rounded-full mx-auto"
                    src={`http://localhost:8000/images/users/${user.profile}`}
                    alt="Profile picture"
                />
                <h2 className="text-center text-2xl font-semibold mt-3">
                    {user.name}
                </h2>
                <p className="text-center text-gray-500 mt-1 capitalize">
                    Role : {user.role}
                </p>
                <hr className="w-52 mx-auto" />
                <p className="text-center text-gray-500 mt-1 capitalize">
                    Email : {user.email}
                </p>
                <hr className="w-52 mx-auto" />
                <p className="text-center text-gray-500 mt-1 capitalize">
                    phone : {user.phone}
                </p>
                <hr className="w-52 mx-auto" />
                <p className="text-center text-gray-500 mt-1 capitalize">
                    address : {user.address}
                </p>
                <div className="text-center mt-5 bg-[#ddc9b9] rounded-lg shadow-lg">
                    <Link
                        to={`/dashboard/employees/edit/${user.id}`}
                        className="text-white"
                    >
                        Edit Info
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Profile;
