import React, { useState, useEffect } from "react";
import { RemoveIcon, Title, MoreIcon, Breadcrumb } from "../components";
import axiosClient from "../../../server/axiosClient";
import Pagination from "react-js-pagination";
import { convertDate } from "../lib/helpers";
export default function Messages() {
    document.title = "Messages";
    const [messages, setMessages] = useState([]);
    const [meta, setMeta] = useState({
        total: 1,
        current_page: 1,
        per_page: 1,
    });
    const getMessages = async (page = 1) => {
        await axiosClient
            .get(`/messages?page=${page}`)
            .then(({ data }) => {
                setMeta(data.meta);
                setMessages(data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        getMessages();
    }, []);
    return (
        <section>
            <Breadcrumb />
            <Title>List Of Books</Title>
            <div className="rounded-lg border border-gray-200 shadow-lg m-5">
                {/* table */}
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500 rounded-xl">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-2 font-medium text-gray-900">
                                #Id
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                Client Name
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900 flex gap-3"
                            >
                                <span>Client Email</span>
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                FeedBack
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                Date
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        {messages.map((message) => {
                            return <Row key={message.id} {...message} />;
                        })}
                    </tbody>
                </table>
                {/* Pagination */}
                <div className="flex items-center justify-between border-t border-gray-200 bg-gray-100 px-4 py-3 sm:px-6">
                    <Pagination
                        totalItemsCount={meta.total}
                        activePage={meta.current_page}
                        itemsCountPerPage={meta.per_page}
                        onChange={(page) => getMessages(page)}
                        itemClass="inline-block mx-1"
                        linkClass="px-3 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900"
                        activeLinkClass="rounded-lg bg-[#c5a992] text-white"
                        disabledClass="rounded-lg bg-gray-200 text-gray-500 cursor-not-allowed"
                    />
                </div>
            </div>
        </section>
    );
}
const Row = ({ id, name, email, text, created_at }) => {
    return (
        <tr className="hover:bg-gray-50">
            <td className="px-2">
                <span className="flex justify-center items-center underline">
                    {id}
                </span>
            </td>
            <td className="px-6 py-4">{name}</td>
            <td className="px-6 py-4">{email}</td>
            <td className="px-6 py-4">{text}</td>
            <td className="px-6 py-4">
                <div className="flex gap-2">
                    <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-gray-400">
                        {convertDate(created_at)}
                    </span>
                </div>
            </td>
            <td className="px-6 py-4">
                <div className="flex gap-4">
                    <MoreIcon link={`/dashboard/messages/${id}`} />
                    <RemoveIcon />
                </div>
            </td>
        </tr>
    );
};
