import React from 'react';
import { FaSearch, FaUser, FaSignInAlt, FaUserPlus, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { CiShoppingCart } from 'react-icons/ci';

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <header className="flex flex-col md:flex-row items-center justify-between p-4 bg-white shadow-md">
        {/* Logo */}
        <div className="w-16 mb-4 md:mb-0">
          <a href="#">
            <img src="../../../public/logo.png" alt="Logo" className="w-full" />
          </a>
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
          {/* Categories Dropdown */}
          <div className="relative group">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
              Categories
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded mt-2 min-w-[160px] z-10">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Category 1
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Category 2
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Category 3
              </a>
            </div>
          </div>

          {/* Delivery Link */}
          <a href="#" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
            Delivery
          </a>

          {/* Login Dropdown */}
          <div className="relative group">
            <a
              href="#"
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center gap-2 rounded-lg transition-colors"
            >
              <FaUser className="text-gray-500" />
              Login
            </a>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 min-w-[160px] z-10">
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                <FaSignInAlt className="text-gray-500" />
                Login
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                <FaUserPlus className="text-gray-500" />
                Sign Up
              </a>
            </div>
          </div>

          {/* Cart Button */}
          <div className="relative group">
            <a
              href="#"
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center gap-2 rounded-lg transition-colors"
            >
              <CiShoppingCart className="text-gray-500" />
              Cart
            </a>
          </div>
        </nav>
      </header>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 text-gray-600">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Get to Know Us */}
          <div>
            <h3 className="text-lg font-bold mb-2">Get to Know Us</h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="hover:text-gray-800">
                Careers
              </a>
              <a href="#" className="hover:text-gray-800">
                Blog
              </a>
              <a href="#" className="hover:text-gray-800">
                About Amazon
              </a>
              <a href="#" className="hover:text-gray-800">
                Investor Relations
              </a>
              <a href="#" className="hover:text-gray-800">
                Amazon Devices
              </a>
            </div>
          </div>

          {/* Contact with Us */}
          <div>
            <h3 className="text-lg font-bold mb-2">Contact with Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Make Money with Us */}
          <div>
            <h3 className="text-lg font-bold mb-2">Make Money with Us</h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="hover:text-gray-800">
                Sell products on Amazon
              </a>
              <a href="#" className="hover:text-gray-800">
                Sell apps on Amazon
              </a>
              <a href="#" className="hover:text-gray-800">
                Become an Affiliate
              </a>
            </div>
          </div>

          {/* Let Us Help You */}
          <div>
            <h3 className="text-lg font-bold mb-2">Let Us Help You</h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="hover:text-gray-800">
                Your Account
              </a>
              <a href="#" className="hover:text-gray-800">
                Your Orders
              </a>
              <a href="#" className="hover:text-gray-800">
                Shipping Rates & Policies
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="container mx-auto px-4 mt-8 flex flex-col sm:flex-row items-center justify-between border-t border-gray-200 pt-4">
          <p>© 2021 E-commerce. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Refund Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;