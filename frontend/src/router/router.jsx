import { createBrowserRouter, Navigate } from "react-router-dom";
//Layouts
import { GuestLayout, AuthLayout, AdminLayout } from "../views/layouts";

//Products
import { Bag, Home, Show } from "../views/products";
// Users
import { Login, Register, Account, EditUser } from "../views/users";
// Pages
import {
    About,
    Contact,
    Search,
    Category,
    Author,
    Chechout,
    Return,
    OrderDetails,
    SupriseMe,
} from "../views/pages";
// Admin
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
// Subpages
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
// Guest
import {
    MainPage,
    MainAbout,
    MainContact,
    MainShow,
    MainSearch,
} from "../views/guest";
//Error
import NotFound from "../views/error/NotFound";
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
                path: "/books/supriseme",
                element: <SupriseMe />,
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
                path: "/account/edit",
                element: <EditUser />,
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
