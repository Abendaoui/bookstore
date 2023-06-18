import {
    HiOutlineViewGrid,
    HiOutlineCube,
    HiOutlineShoppingCart,
    HiOutlineUsers,
    HiOutlineDocumentText,
    HiOutlineAnnotation,
    HiUser,
} from "react-icons/hi";

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: "dashboard",
        label: "Dashboard",
        path: "/dashboard",
        icon: <HiOutlineViewGrid />,
    },
    {
        key: "employees",
        label: "Employees",
        path: "/dashboard/employees",
        icon: <HiUser />,
    },
    {
        key: "customers",
        label: "Customers",
        path: "/dashboard/customers",
        icon: <HiOutlineUsers />,
    },
    {
        key: "products",
        label: "Products",
        path: "/dashboard/products",
        icon: <HiOutlineCube />,
    },
    {
        key: "orders",
        label: "Orders",
        path: "/dashboard/orders",
        icon: <HiOutlineShoppingCart />,
    },
    {
        key: "transactions",
        label: "Transactions",
        path: "/dashboard/transactions",
        icon: <HiOutlineDocumentText />,
    },
    {
        key: "messages",
        label: "Messages",
        path: "/dashboard/messages",
        icon: <HiOutlineAnnotation />,
    },
];

export const orderStatus = [
    "pending", //cancel
    "accepted", //cancel
    "shipped", //return
    "canceled",
    "returned",
    "delivered", //return
];

export const langaugesList = [
    'english',
    'arabic',
    'french',
    'spanish'
]
