import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../../server/axiosClient";

const OrderDetails = () => {
    const { id } = useParams();
    const printArea = useRef();
    const handlePrint = () => {
        const section = printArea.current;
        const printContents = section.innerHTML;
        const originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    };
    function convertDate(date) {
        const dateStr = date;
        const dateObj = new Date(dateStr);
        const options = { month: "short", day: "numeric", year: "numeric" };
        const formattedDate = dateObj.toLocaleDateString("en-US", options);
        return formattedDate;
    }
    const [orderTarget, setOrderTarget] = useState({});
    const getOrder = async () => {
        axiosClient
            .get(`/orders/${id}`)
            .then(({ data }) => {
                if (data) {
                    setOrderTarget(data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        getOrder();
    });
    return (
        <section
            className="mx-auto max-w-full mt-20 mb-20 pt-20 text-base"
            ref={printArea}
            id="print"
        >
            <div className="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3">
                <div className="mt-2 mb-8 w-full text-center">
                    <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
                        Order Details
                    </h4>
                    <p className="mt-2 px-2 text-base text-gray-600">
                        Please Make Sure To Have This Order With You
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 px-2 w-full">
                    <div className="flex flex-col items-start justify-center rounded-2xl bg-gray-100 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <p className="text-sm text-gray-600">Full Name</p>
                        <p className="text-base font-medium text-navy-700 dark:text-white">
                            {orderTarget.full_name}
                        </p>
                    </div>

                    <div className="flex flex-col justify-center rounded-2xl bg-gray-100 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <p className="text-sm text-gray-600">Address</p>
                        <p className="text-base font-medium text-navy-700 dark:text-white">
                            {orderTarget.address}
                        </p>
                    </div>

                    <div className="flex flex-col items-start justify-center rounded-2xl bg-gray-100 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <p className="text-sm text-gray-600">Telephone</p>
                        <p className="text-base font-medium text-navy-700 dark:text-white">
                            {orderTarget.telephone}
                        </p>
                    </div>

                    <div className="flex flex-col justify-center rounded-2xl bg-gray-100 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <p className="text-sm text-gray-600">Ordered Produce</p>
                        <p className="text-base font-medium text-navy-700 dark:text-white">
                            {orderTarget.ordered_products &&
                            orderTarget.ordered_products.includes(",")
                                ? orderTarget.ordered_products
                                      .split(",")
                                      .map((product, i) => {
                                          return (
                                              <span key={i}>
                                                  {product} <br />
                                              </span>
                                          );
                                      })
                                : orderTarget.ordered_products}
                        </p>
                    </div>

                    <div className="flex flex-col items-start justify-center rounded-2xl bg-gray-100 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <p className="text-sm text-gray-600">Order Date</p>
                        <p className="text-base font-medium text-navy-700 dark:text-white">
                            {convertDate(orderTarget.order_date)}
                        </p>
                    </div>

                    <div className="flex flex-col justify-center rounded-2xl bg-gray-100 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <p className="text-sm text-gray-600">Total Paid</p>
                        <p className="text-base font-medium text-navy-700 dark:text-white">
                            ${orderTarget.total_price}
                        </p>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-xl mt-10">
                <button
                    onClick={handlePrint}
                    type="button"
                    className="capitalize mb-5 w-full text-center border border-dashed border-[#c5a992] hover:bg-[#f6e6da] text-gray-700 transition-colors flex gap-3 p-3 rounded-lg mt-5 text-sm font-semibold"
                >
                    <span className="w-fit mx-auto">Print Order</span>
                </button>
            </div>
        </section>
    );
};

export default OrderDetails;
