import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosClient from "../../server/axiosClient";
const Return = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [returnReason, setReturnReason] = useState({
        notes: "",
        reason: "",
        status: "returned",
    });
    const returnOrder = async (ev) => {
        ev.preventDefault();
        await axiosClient
            .put(`/orders/${id}`, returnReason)
            .then(({ data }) => {
                if (data) {
                    navigate("/account");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <section className="mx-auto max-w-5xl mt-32">
            <form
                onSubmit={returnOrder}
                className="space-y-4 bg-transparent px-6 py-4 rounded-lg shadow-xl"
            >
                <div className="mb-4">
                    <label className="sr-only" htmlFor="notes">
                        Notes
                    </label>
                    <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm focus:outline-[#c5a992]"
                        placeholder="Add Some Notes"
                        type="text"
                        id="notes"
                        value={returnReason.notes}
                        onChange={(e) =>
                            setReturnReason({
                                ...returnReason,
                                notes: e.target.value,
                            })
                        }
                    />
                </div>

                <div className="mt-4">
                    <label className="sr-only" htmlFor="reason">
                        Reason
                    </label>

                    <textarea
                        className="w-full rounded-lg p-3 text-sm border-[#c5a992] focus:outline-[#c5a992]"
                        placeholder="Add Few Sentence To Describe What The Problem"
                        rows="8"
                        id="reason"
                        value={returnReason.reason}
                        onChange={(e) =>
                            setReturnReason({
                                ...returnReason,
                                reason: e.target.value,
                            })
                        }
                    ></textarea>
                </div>

                <div className="mt-4">
                    <button
                        type="submit"
                        className="capitalize border border-dashed border-[#c5a992] hover:bg-[#f6e6da] hover:text-gray-700 transition-colors texl-lg
                        flex gap-3 py-3 px-5 rounded-lg mt-5 text-sm font-semibold"
                    >
                        Return
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Return;
