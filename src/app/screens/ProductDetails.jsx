import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../apiSlice/productApi";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";
import { useAddCartMutation } from "../apiSlice/cartApiSlice";
import { Toaster, toast } from "react-hot-toast";

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const { data: product, isLoading } = useGetSingleProductQuery(id);
  const [addCart, { isLoading: isAdding }] = useAddCartMutation(); // Mutation for adding to cart
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = async () => {
    try {
      // Fake Store API requires a fixed userId (1) for testing
      const cartData = {
        userId: 1,
        date: new Date().toISOString(),
        products: [{ productId: parseInt(id), quantity }],
      };

      await addCart(cartData).unwrap();
      toast.success("Product added to cart!");
    } catch (error) {
      toast.error("Failed to add to cart. Try again.");
    }
  };

  if (isLoading) return <div>Loading product details...</div>;

  return (
    <div>
      <Toaster position="top-center" />
      <NavBar />
      <div className="flex flex-col md:flex-row items-center mt-10 gap-10 px-5">
        {/* Product Image */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <img src={product?.image} alt={product?.title} className="w-64 h-64" />
          {/* Quantity Selector */}
          <select
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="mt-3 p-2 border rounded"
          >
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>{num + 1}</option>
            ))}
          </select>
          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className="mt-5 bg-blue-500 text-white py-2 px-5 rounded-lg"
          >
            {isAdding ? "Adding..." : "Add to Cart"}
          </button>
        </div>

        {/* Product Details */}
        <div className="w-full md:w-2/3">
          <h3 className="text-2xl font-bold">{product?.title}</h3>
          <p>⭐ {product?.rating?.rate} ({product?.rating?.count} reviews)</p>
          <p className="text-green-600 font-bold">Price: ${product?.price}</p>
          <p>{product?.description}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
