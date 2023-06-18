import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../server/axiosClient";
import { useStateContext } from "../../context/ContextProvider";
import bg from "../../assets/old-books-436498_960_720.jpg";
const Register = () => {
    const { setToken, setUser } = useStateContext();
    const [errors, setErrors] = useState(null);
    const [profile, setProfile] = useState("");
    const firstName = useRef();
    const secondName = useRef();
    const email = useRef();
    const password = useRef();
    const confirmPassword = useRef();
    const handleProfile = (ev) => {
        setProfile(ev.target.files[0]);
    };
    // const handleRegister = async (ev) => {
    //     ev.preventDefault();
    //     const username = `${firstName.current.value} ${secondName.current.value}`;
    //     const formData = new FormData();
    //     formData.append("name", username);
    //     formData.append("password", password.current.value);
    //     formData.append("email", email.current.value);
    //     formData.append("password_confirmation", confirmPassword.current.value);
    //     formData.append("profile", profile);

    //     await axiosClient
    //         .post("/register", formData)
    //         .then(({ data }) => {
    //             if (data) {
    //                 setToken(data.token);
    //                 setUser(data.user);
    //             }
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };
    const handleRegister = async (ev) => {
        ev.preventDefault();
        const username = `${firstName.current.value} ${secondName.current.value}`;
        const formData = new FormData();
        formData.append("name", username);
        formData.append("password", password.current.value);
        formData.append("email", email.current.value);
        formData.append("password_confirmation", confirmPassword.current.value);
        formData.append("profile", profile);

        try {
            const { data } = await axiosClient.post("/register", formData);

            if (data) {
                setToken(data.token);
                setUser(data.user);
            }
        } catch (err) {
            setErrors(err.response.data.message);
            // Handle the error, display a message, or perform any other necessary actions
        }
    };

    return (
        <section className="">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                    <img
                        alt="Night"
                        src={bg}
                        className="absolute inset-0 h-full w-full object-cover opacity-80"
                    />

                    <div className="hidden lg:relative lg:block lg:p-12">
                        <a className="block text-white" hvalue="data./">
                            <span className="sr-only">Home</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-8 sm:h-10"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                                />
                            </svg>
                        </a>

                        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                            Join Our Store of Book Lovers Today!
                        </h2>

                        <p className="mt-4 leading-relaxed text-white">
                            Welcome to our bookstore, where we celebrate the
                            love of reading and the joy of discovering new
                            stories. By creating an account with us, you'll gain
                            access to a world of literary treasures, including
                            bestsellers, classNameics, and hidden gems waiting
                            to be discovered.
                        </p>
                    </div>
                </section>
                {/* Form Section */}
                <main
                    aria-label="Main"
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
                >
                    <div className="max-w-xl lg:max-w-3xl">
                        <div className="relative -mt-16 block lg:hidden">
                            <a
                                className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#C5A992] sm:h-20 sm:w-20"
                                hvalue="data./"
                            >
                                <span className="sr-only">Home</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="h-8 sm:h-10"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                                    />
                                </svg>
                            </a>

                            {/* <h1 className="mt-2 sr-only text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                                Welcome to Squid 🦑
                            </h1>

                            <p className="mt-4 sr-only leading-relaxed text-gray-500">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Eligendi nam dolorum aliquam,
                                quibusdam aperiam voluptatum.
                            </p> */}
                        </div>

                        <form
                            onSubmit={handleRegister}
                            className="mt-8 grid grid-cols-6 gap-6 form"
                            encType="multipart/form-data"
                        >
                            <div className="col-span-6 text-center">
                                <h1 className="text-2xl">
                                    Register For Free !
                                </h1>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="FirstName"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    First Name
                                </label>

                                <input
                                    type="text"
                                    id="FirstName"
                                    name="first_name"
                                    ref={firstName}
                                    className="mt-1 w-full rounded-md border-0P bg-white text-sm text-gray-700 shadow-sm
                                    focus:ring-blue-600"
                                    autoFocus
                                    required
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="LastName"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Last Name
                                </label>

                                <input
                                    type="text"
                                    id="LastName"
                                    name="last_name"
                                    ref={secondName}
                                    required
                                    className="mt-1 w-full rounded-md bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6">
                                <label
                                    htmlFor="Email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email
                                </label>

                                <input
                                    type="email"
                                    id="Email"
                                    name="email"
                                    ref={email}
                                    required
                                    className="mt-1 w-full rounded-md bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="Password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>

                                <input
                                    type="password"
                                    id="Password"
                                    name="password"
                                    ref={password}
                                    required
                                    className="mt-1 w-full rounded-md bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="PasswordConfirmation"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password Confirmation
                                </label>

                                <input
                                    type="password"
                                    id="PasswordConfirmation"
                                    name="password_confirmation"
                                    ref={confirmPassword}
                                    required
                                    className="mt-1 w-full rounded-md bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>
                            <div className="col-span-6">
                                <label
                                    htmlFor="Email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Profile
                                </label>

                                <input
                                    type="file"
                                    id="profile"
                                    name="profile"
                                    onChange={handleProfile}
                                    required
                                    className="mt-1 w-full rounded-md bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>
                            <div className="col-span-6">
                                <span className="text-sm text-red-500">
                                    {errors && errors}
                                </span>
                            </div>

                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button
                                    className="capitalize border border-dashed border-[#c5a992] hover:bg-[#f6e6da] hover:text-gray-700 transition-colors texl-lg
                        flex gap-3 py-3 px-5 rounded-lg mt-5 text-sm font-semibold"
                                >
                                    Create an account
                                </button>

                                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                    Already have an account?
                                    <Link
                                        to="/login"
                                        className="text-gray-700 underline"
                                    >
                                        Log in
                                    </Link>
                                    .
                                </p>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>
    );
};

export default Register;
