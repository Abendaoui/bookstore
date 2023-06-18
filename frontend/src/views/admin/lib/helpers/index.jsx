export function getOrderStatus(status) {
    switch (status) {
        case "pending":
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-yellow-600 bg-yellow-100">
                    {status.replaceAll("_", " ").toLowerCase()}
                </span>
            );
        case "accepted":
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-orange-600 bg-orange-100">
                    {status.replaceAll("_", " ").toLowerCase()}
                </span>
            );
        case "shipped":
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-teal-600 bg-teal-100">
                    {status.replaceAll("_", " ").toLowerCase()}
                </span>
            );
        case "canceled":
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-white bg-red-300">
                    {status.replaceAll("_", " ").toLowerCase()}
                </span>
            );
        case "returned":
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-red-600 bg-red-100">
                    {status.replaceAll("_", " ").toLowerCase()}
                </span>
            );
        case "delivered":
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-green-600 bg-green-100">
                    {status.replaceAll("_", " ").toLowerCase()}
                </span>
            );
        default:
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-yellow-600 bg-yellow-100">
                    {status.replaceAll("_", " ").toLowerCase()}
                </span>
            );
    }
}
export function convertDate(date) {
    const dateStr = date;
    const dateObj = new Date(dateStr);
    const options = { month: "short", day: "numeric", year: "numeric" };
    const formattedDate = dateObj.toLocaleDateString("en-US", options);
    return formattedDate;
}
