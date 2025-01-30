import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FaSearch, FaUser, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "@headlessui/react";
import { useCategoriesQuery } from "../../apiSlice/categoryApi";
import { FaTruck } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { FaHome } from "react-icons/fa"
import { RiLogoutBoxLine } from "react-icons/ri";

const NavBar = () => {

    const navigate = useNavigate()
    const token = localStorage.getItem("token");
    const { data: categories, isLoading } = useCategoriesQuery(token);

    const handleLogout = () => {
        localStorage.clear("token")
        navigate("/login")
    }

    if (isLoading) {
        return (
            <header className="flex flex-col md:flex-row items-center justify-between bg-white shadow-md">
                {/* Logo Skeleton */}
                <div className="w-16 mb-4 md:mb-0">
                    <Skeleton height={64} width={64} circle={true} />
                </div>

                {/* Search Bar Skeleton */}
                <div className="relative w-full md:w-64 mb-4 md:mb-0">
                    <Skeleton height={40} width="100%" />
                </div>

                {/* Navigation Links Skeleton */}
                <nav className="flex flex-wrap justify-center gap-2 md:gap-4">
                    <Skeleton height={40} width={100} />
                    <Skeleton height={40} width={100} />
                    <Skeleton height={40} width={100} />
                    <Skeleton height={40} width={100} />
                </nav>
            </header>
        );
    }

    return (
        <div>
            {/* Navbar */}
            <header className="flex flex-col md:flex-row items-center justify-between bg-white shadow-md mb-4">
                {/* Logo with Home Link */}
                <div className="w-16 mb-4 md:mb-0">
                    <Link to="/">
                        <img
                            src="../../../public/logo.png"
                            alt="Logo"
                            className="w-full"
                        />
                    </Link>
                </div>

                {/* Search Bar */}
                <div className="relative w-full md:w-64 mb-4 md:mb-0">
                    <input
                        type="text"
                        name="searchBar"
                        placeholder="Search products..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaSearch className="text-gray-400" />
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-wrap justify-center gap-2 md:gap-4">
                    <div className="relative group">
                        <Link
                            to={"/"}
                            className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center gap-2 rounded-lg transition-colors text-decoration-none"
                        >
                            <FaHome className="text-gray-500" /> Home
                        </Link>
                    </div>
                    {/* Categories Dropdown */}
                    <div className="relative inline-block text-left">
                        <Menu>
                            <Menu.Button className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center gap-2 rounded-lg transition-colors text-decoration-none">
                                <BiCategory className="text-gray-500" /> Category
                            </Menu.Button>
                            <Menu.Items className="absolute mt-2 bg-white shadow-lg rounded w-40 z-10">
                                {categories?.map((category, index) => (
                                    <Menu.Item key={index}>
                                        {({ active }) => (
                                            <Link
                                                to={`/category/${category}`}
                                                className={`${active ? "bg-gray-100" : ""
                                                    } block px-4 py-2 text-gray-700 text-decoration-none`}
                                            >
                                                {category}
                                            </Link>
                                        )}
                                    </Menu.Item>
                                ))}
                            </Menu.Items>
                        </Menu>
                    </div>

                    {/* Delivery Link */}
                    <Link
                        to="/delivery"
                        className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center gap-2 rounded-lg transition-colors text-decoration-none"
                    >
                        <FaTruck className="text-gray-500" />
                        Delivery
                    </Link>

                    {/* Login Dropdown */}
                    <Menu as="div" className="relative inline-block text-left">
                        <Menu.Button className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center gap-2 rounded-lg transition-colors">
                            <FaUser className="text-gray-500" />
                            Login
                        </Menu.Button>
                        <Menu.Items className="absolute mt-2 bg-white shadow-lg rounded-lg w-40 z-10">
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        to={"/login"}
                                        className={`${active ? "bg-gray-100" : ""
                                            } flex items-center gap-2 px-4 py-2 text-gray-700 text-decoration-none`}
                                    >
                                        <FaSignInAlt className="text-gray-500" />
                                        Login
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        to={"/register"}
                                        className={`${active ? "bg-gray-100" : ""
                                            } flex items-center gap-2 px-4 py-2 text-gray-700 text-decoration-none`}
                                    >
                                        <FaUserPlus className="text-gray-500" />
                                        Register
                                    </Link>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Menu>

                    {/* Cart Button */}
                    <div className="relative group">
                        <Link
                            to={"/cart"}
                            className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center gap-2 rounded-lg transition-colors text-decoration-none"
                        >
                            <FaShoppingCart className="text-gray-500" /> Cart
                        </Link>
                    </div>
                    <div className="relative group">
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center gap-2 rounded-lg transition-colors text-decoration-none"
                        >
                            <RiLogoutBoxLine className="text-gray-500" /> Logout
                        </button>
                    </div>
                </nav>

            </header>
        </div >
    );
};

export default NavBar;
