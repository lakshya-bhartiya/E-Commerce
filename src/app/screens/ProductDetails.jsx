import React, { useState } from "react";
import { data, useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../apiSlice/productApi";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";
import { useAddCartMutation } from "../apiSlice/cartApiSlice";
import { Toaster, toast } from "react-hot-toast"; // Import Toaster and toast
import { useGetCartQuery } from "../apiSlice/cartApiSlice";

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const token = localStorage.getItem("token");
  const { data: product, isLoading: isProductLoading } =
    useGetSingleProductQuery({ id, token }); // Fetch product details
  const [addCart, { isLoading: isCartLoading }] = useAddCartMutation(); // Mutation to add to cart
  const { data: cart } = useGetCartQuery(token); // Get cart data

  console.log(cart, "cart")

  const [quantity, setQuantity] = useState(1); // State for quantity selection

  const handleAddToCart = async () => {
    try {
      // Decode the token to get the user ID
      const payload = JSON.parse(atob(token.split(".")[1]));
      const userId = payload.userId; // Assuming the token contains the user ID

      // Prepare the cart data
      const cartData = {
        userId,
        date: new Date().toISOString(), // Current date
        products: [
          {
            productId: parseInt(id), // Product ID from the URL
            quantity: quantity, // Dynamic quantity
          },
        ],
      };

      // Call the addCart mutation
      const response = await addCart({ cartData, token }).unwrap();
      console.log("Product added to cart:", response);

      // Show success toast
      toast.success("Product added to cart successfully!");
    } catch (error) {
      console.error("Failed to add product to cart:", error);

      // Show error toast
      toast.error("Failed to add product to cart. Please try again.");
    }
  };

  if (isProductLoading) {
    return <div>Loading product details...</div>;
  }

  return (
    <div>
      {/* Add Toaster component for displaying toast notifications */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000, // Toast duration in milliseconds
          style: {
            fontSize: "14px",
          },
        }}
      />

      <NavBar />
      <div className="flex flex-col md:flex-row items-center md:items-start mt-10 gap-10 px-5 md:px-20">
        {/* Left Section - Product Image & Add to Cart */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-64 h-64"
          />
          {/* Quantity Selector */}
          <div className="mt-4">
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700"
            >
              Quantity
            </label>
            <select
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              {[...Array(10).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
          </div>
          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={isCartLoading}
            className="mt-6 bg-blue-500 hover:bg-cyan-700 text-white text-lg font-semibold py-2 px-6 rounded-lg transition duration-300 disabled:bg-gray-400"
          >
            {isCartLoading ? "Adding to Cart..." : "Add to Cart"}
          </button>
        </div>

        {/* Right Section - Product Details */}
        <div className="w-full md:w-2/3 flex flex-col gap-4">
          <h3 className="text-2xl font-bold">{product?.title}</h3>
          <p className="text-gray-600">
            <span className="font-semibold">Rating:</span>{" "}
            {product?.rating?.rate} ⭐
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Reviews:</span>{" "}
            {product?.rating?.count}
          </p>
          <p className="text-xl font-semibold text-green-700">
            Price: ${product?.price}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {product?.description}
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;
