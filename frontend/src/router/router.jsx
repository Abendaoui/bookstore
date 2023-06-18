import { createBrowserRouter, Navigate } from "react-router-dom";
// Auth
import AuthLayout from "../views/layouts/AuthLayout";
import Home from "../views/products/Home";
// Guest
import GuestLayout from "../views/layouts/GuestLayout";
import Login from "../views/users/Login";
import Register from "../views/users/Register";
import NotFound from "../views/error/NotFound";
import Bag from "../views/products/Bag";
import Account from "../views/users/Account";
import Show from "../views/products/Show";
import {
    About,
    Contact,
    Search,
    Category,
    Author,
    Chechout,
    Return,
    OrderDetails,
} from "../views/pages";
// Admin
import AdminLayout from "../views/layouts/AdminLayout";
import {
    Customers,
    Dashboard,
    Messages,
    Orders,
    Products,
    Settings,
    Support,
    Transactions,
    Employees,
    Profile,
} from "../views/admin/pages";
import {
    AddAuthor,
    AddCategorie,
    AddEmployee,
    AddProduct,
    EditEmployee,
    EditProduct,
    ShowOrder,
    ShowTransactions,
} from "../views/admin/pages/subpages";
import MainPage from "../views/guest/MainPage";
import MainSearch from "../views/guest/MainSearch";
import MainShow from "../views/guest/MainShow";
import MainAbout from "../views/guest/MainAbout";
import MainContact from "../views/guest/MainContact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/books" />,
            },
            {
                path: "/books",
                element: <Home />,
            },
            {
                path: "/books/:book",
                element: <Show />,
            },
            {
                path: "/books/search",
                element: <Search />,
            },
            {
                path: "/your_bag",
                element: <Bag />,
            },
            {
                path: "/account",
                element: <Account />,
            },
            {
                path: "/return/:id",
                element: <Return />,
            },
            {
                path: "/order/:id",
                element: <OrderDetails />,
            },
            {
                path: "/categories/:category",
                element: <Category />,
            },
            {
                path: "/authors/:author",
                element: <Author />,
            },
            {
                path: "/checkout",
                element: <Chechout />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/about",
                element: <About />,
            },
        ],
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/home" />,
            },
            {
                path: "/home",
                element: <MainPage />,
            },
            {
                path: "/home/:book",
                element: <MainShow />,
            },
            {
                path: "/home/search",
                element: <MainSearch />,
            },
            {
                path: "/aboutus",
                element: <MainAbout />,
            },
            {
                path: "/contactus",
                element: <MainContact />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: <AdminLayout />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "products",
                element: <Products />,
            },
            {
                path: "products/add",
                element: <AddProduct />,
            },
            {
                path: "products/edit/:id",
                element: <EditProduct />,
            },
            {
                path: "products/author/add",
                element: <AddAuthor />,
            },
            {
                path: "products/categorie/add",
                element: <AddCategorie />,
            },
            {
                path: "orders",
                element: <Orders />,
            },

            {
                path: "order/:id",
                element: <ShowOrder />,
            },
            {
                path: "transactions/:id",
                element: <ShowTransactions />,
            },
            {
                path: "customers",
                element: <Customers />,
            },
            {
                path: "employees",
                element: <Employees />,
            },
            {
                path: "employee/add",
                element: <AddEmployee />,
            },
            {
                path: "employees/edit/:id",
                element: <EditEmployee />,
            },
            {
                path: "transactions",
                element: <Transactions />,
            },
            {
                path: "messages",
                element: <Messages />,
            },
            {
                path: "settings",
                element: <Settings />,
            },
            {
                path: "support",
                element: <Support />,
            },
            {
                path: "profile",
                element: <Profile />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);
export default router;
