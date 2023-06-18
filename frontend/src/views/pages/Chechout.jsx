import { useEffect, useState, useRef } from "react";
import amana from "../../assets/Amana-Logo.png";
import morocco from "../../assets/morocco.gif";
import axiosClient from "../../server/axiosClient";
import { useNavigate } from "react-router-dom";
const Chechout = () => {
    const navigate = useNavigate();
    const [orderedBooks, setOrderedBooks] = useState([]);
    const email = useRef();
    const cardHolder = useRef();
    const [address, setAddress] = useState({
        street: "",
        zip: "",
    });
    const phone = useRef();
    const [card, setCard] = useState({
        cardNumber: "",
        monthYear: "",
        cvv: "",
    });
    const placeOrder = async (ev) => {
        ev.preventDefault();
        const formData = new FormData();
        formData.append("total_price", total + shippeng);
        formData.append("full_name", cardHolder.current.value);
        formData.append("email", email.current.value);
        formData.append("address", `${address.street},${address.zip}`);
        formData.append(
            "method",
            shippeng == 25 ? "Amana 2 - 4 days" : "Amana 10 - 15 days"
        );
        formData.append("telephone", phone.current.value);
        await axiosClient
            .post("/orders", formData)
            .then(({ data }) => {
                if (data) {
                    navigate("/books");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const getBag = async () => {
        await axiosClient
            .get("/carts")
            .then(({ data }) => {
                setOrderedBooks(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const [total, setTotal] = useState(0);
    const [shippeng, setShippeng] = useState(10);
    function handleShippingChange(event) {
        const value = parseInt(event.target.value);
        setShippeng(value);
    }
    async function getTotal() {
        await axiosClient
            .get("/total")
            .then(({ data }) => {
                setTotal(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    useEffect(() => {
        getBag();
        getTotal();
    }, []);
    return (
        <section className="mx-auto max-w-full mt-10 mb-20 pt-20 text-base">
            <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                <div className="px-4">
                    {/* List Of Ordered Books */}
                    <div
                        className="space-y-3 rounded-lg border bg-gray-50 px-2 py-4 sm:px-6
                     overflow-x-auto scroll-container max-h-[275px]"
                    >
                        {orderedBooks.map((product) => {
                            const { id, title, cover, price, quantity } =
                                product;
                            return (
                                <div
                                    key={id}
                                    className="flex flex-col rounded-lg bg-gray-50 sm:flex-row"
                                >
                                    <img
                                        className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                                        src={`http://localhost:8000/images/books/${cover}`}
                                        alt=""
                                    />
                                    <div className="flex w-full flex-col px-4 py-4">
                                        <span className="font-semibold">
                                            {title}
                                        </span>
                                        <p className="text-lg font-bold">
                                            ${price} * {quantity} ={" "}
                                            {price * quantity}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {/* Shipping Methode */}
                    <p className="mt-8 text-lg font-medium">Shipping Methods</p>
                    <form className="mt-5 grid gap-6">
                        <div className="relative">
                            <input
                                className="peer hidden"
                                id="radio_1"
                                type="radio"
                                name="radio"
                                value="25"
                                onChange={handleShippingChange}
                            />
                            <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-[#c5a992] bg-white"></span>
                            <label
                                className="peer-checked:border-2 peer-checked:border-[#c5a992]
                                 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-[#c5a992] p-4"
                                htmlFor="radio_1"
                            >
                                <img
                                    className="w-14 object-contain"
                                    src={amana}
                                    alt=""
                                />
                                <div className="ml-5">
                                    <span className="mt-2 font-semibold">
                                        Amana Delivery
                                    </span>
                                    <p className="text-slate-500 text-sm leading-6">
                                        Delivery: 2-4 Days
                                    </p>
                                </div>
                            </label>
                        </div>
                        <div className="relative">
                            <input
                                className="peer hidden"
                                id="radio_2"
                                type="radio"
                                name="radio"
                                value="10"
                                onChange={handleShippingChange}
                            />
                            <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-[#c5a992] bg-white"></span>
                            <label
                                className="peer-checked:border-2 peer-checked:border-[#c5a992] peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-[#c5a992] p-4"
                                htmlFor="radio_2"
                            >
                                <img
                                    className="w-14 object-contain"
                                    src={amana}
                                    alt=""
                                />
                                <div className="ml-5">
                                    <span className="mt-2 font-semibold">
                                        Amana Delivery
                                    </span>
                                    <p className="text-slate-500 text-sm leading-6">
                                        Delivery: 10-15 Days
                                    </p>
                                </div>
                            </label>
                        </div>
                    </form>
                </div>
                {/* Customer Info */}
                <form
                    className="mt-10 bg-gray-50 px-4 pt-4 lg:mt-0"
                    onSubmit={placeOrder}
                >
                    <p className="text-xl font-medium text-center">
                        Payment Details
                    </p>
                    <div className="">
                        {/* Email */}
                        <label
                            htmlFor="email"
                            className="mt-4 mb-2 block text-sm font-medium"
                        >
                            Email
                        </label>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-[#c5a992] focus:ring-[#c5a992]"
                                placeholder="your.email@gmail.com"
                                ref={email}
                                required
                            />
                            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                            </div>
                        </div>
                        {/* Card Owner Name */}
                        <label
                            htmlFor="phone"
                            className="mt-4 mb-2 block text-sm font-medium"
                        >
                            Phone Number
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-[#c5a992] focus:ring-[#c5a992]"
                                placeholder="Your Phone Number"
                                ref={phone}
                                required
                            />
                            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="h-4 w-4 text-gray-400"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                                    />
                                </svg>
                            </div>
                        </div>
                        {/* Card Owner Name */}
                        <label
                            htmlFor="card-holder"
                            className="mt-4 mb-2 block text-sm font-medium"
                        >
                            Card Holder
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="card-holder"
                                name="card-holder"
                                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-[#c5a992] focus:ring-[#c5a992]"
                                placeholder="Your full name here"
                                ref={cardHolder}
                                required
                            />
                            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                        {/* Card Info  */}
                        <label
                            htmlFor="card-no"
                            className="mt-4 mb-2 block text-sm font-medium"
                        >
                            Card Details
                        </label>
                        <div className="flex gap-1">
                            <div className="relative w-7/12 flex-shrink-0">
                                <input
                                    type="text"
                                    id="card-no"
                                    name="card-no"
                                    className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-[#c5a992] focus:ring-[#c5a992]"
                                    placeholder="xxxx-xxxx-xxxx-xxxx"
                                    value={card.cardNumber}
                                    required
                                    onChange={(e) =>
                                        setCard({
                                            ...card,
                                            cardNumber: e.target.value,
                                        })
                                    }
                                />
                                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <svg
                                        className="h-4 w-4 text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                                        <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                                    </svg>
                                </div>
                            </div>
                            <input
                                type="text"
                                name="credit-expiry"
                                className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-[#c5a992] focus:ring-[#c5a992]"
                                placeholder="MM/YY"
                                value={card.monthYear}
                                onChange={(e) =>
                                    setCard({
                                        ...card,
                                        monthYear: e.target.value,
                                    })
                                }
                                required
                            />
                            <input
                                type="text"
                                name="credit-cvc"
                                className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-[#c5a992] focus:ring-[#c5a992]"
                                placeholder="CVC"
                                value={card.cvv}
                                onChange={(e) =>
                                    setCard({
                                        ...card,
                                        cvv: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>
                        {/* Address */}
                        <label
                            htmlFor="billing-address"
                            className="mt-4 mb-2 block text-sm font-medium"
                        >
                            Billing Address
                        </label>
                        <div className="flex flex-col sm:flex-row justify-between">
                            <div className="relative flex-shrink-0 sm:w-7/12">
                                <input
                                    type="text"
                                    id="billing-address"
                                    name="billing-address"
                                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-[#c5a992] focus:ring-[#c5a992]"
                                    placeholder="Street Address"
                                    value={address.street}
                                    onChange={(e) =>
                                        setAddress({
                                            ...address,
                                            street: e.target.value,
                                        })
                                    }
                                    required
                                />
                                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <img
                                        className="h-4 w-4 object-contain"
                                        src={morocco}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <input
                                type="text"
                                name="billing-zip"
                                className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-[#c5a992] focus:ring-[#c5a992]"
                                placeholder="ZIP"
                                value={address.zip}
                                onChange={(e) =>
                                    setAddress({
                                        ...address,
                                        zip: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>

                        {/* <!-- Total --> */}
                        <div className="mt-6 border-t border-b py-2">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-900">
                                    Subtotal
                                </p>
                                <p className="font-semibold text-gray-900">
                                    ${total.toFixed(2)}
                                </p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-900">
                                    Shipping
                                </p>
                                <p className="font-semibold text-gray-900">
                                    ${shippeng}
                                </p>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">
                                Total
                            </p>
                            <p className="text-2xl font-semibold text-gray-900">
                                ${total + shippeng}
                            </p>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="capitalize mb-5 w-full text-center border border-dashed border-[#c5a992] hover:bg-[#f6e6da] text-gray-700 transition-colors flex gap-3 p-3 rounded-lg mt-5 text-sm font-semibold"
                    >
                        <span className="w-fit mx-auto">Place Order</span>
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Chechout;
