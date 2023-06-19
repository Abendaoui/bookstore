import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../server/axiosClient";
import { useStateContext } from "../../context/ContextProvider";
import bg from "../../assets/book-1659717__340.jpg";
const Login = () => {
    const { setToken, setUser, setAdminToken } = useStateContext();
    const email = useRef();
    const password = useRef();
    const [error, setError] = useState("");
    const handleLogin = async (ev) => {
        ev.preventDefault();
        const formData = new FormData();
        formData.append("email", email.current.value);
        formData.append("password", password.current.value);
        try {
            const { data } = await axiosClient.post("/login", formData);

            if (data) {
                setUser(data.user);
                if (data.user.is_admin) {
                    setAdminToken(data.token);
                } else {
                    setToken(data.token);
                }
            }
        } catch (err) {
            if (err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError(err.response.data.errors.email);
            }
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
                        <a className="block text-white" href="/">
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
                            Welcome Back! Login to Your Account
                        </h2>

                        <p className="mt-4 leading-relaxed text-white">
                            We're thrilled to have you back! By logging in to
                            your account, you'll be able to access your
                            personalized bookshelves, view your order history,
                            and manage your account settings.
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
                                href="/"
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
                        </div>

                        <form
                            onSubmit={handleLogin}
                            className="mt-8 grid grid-cols-6 gap-6 form"
                        >
                            <div className="col-span-12 text-center">
                                <h1 className="text-2xl">
                                    Log Into Your Account !
                                </h1>
                            </div>
                            <div className="col-span-12 text-center">
                                <small className="text-red-500 text-xs">
                                    {error && error}
                                </small>
                            </div>
                            <div className="col-span-12">
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
                                    className="mt-1 w-full rounded-md bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-12">
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
                                    className="mt-1 w-full rounded-md bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>
                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button
                                    className="capitalize border border-dashed border-[#c5a992] hover:bg-[#f6e6da] hover:text-gray-700 transition-colors texl-lg
                        flex gap-3 py-3 px-5 rounded-lg mt-5 text-sm font-semibold"
                                >
                                    Login
                                </button>

                                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                    Not Registerd ?
                                    <Link
                                        to="/register"
                                        className="text-gray-700 underline"
                                    >
                                        Register
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

export default Login;
