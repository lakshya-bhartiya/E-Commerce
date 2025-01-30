import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({products}) => {

  const navigate = useNavigate()

  const handleProductClick = (id) => {
    console.log("Clicked Product ID:", id); // ID console me dikhegi
    navigate(`/product/${id}`); // Redirect to product detail page
  };

  return (
    <div className="grid grid-cols-5 gap-4"> {/* Add a grid layout */}
      {products?.map((product) => (
        <div
          key={product.id}
          className="flex flex-col border-2 bg-white p-4 rounded-lg shadow-md w-58 h-[24.5rem]"
          onClick={() => handleProductClick(product.id)} // Add click event
        >
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-40" 
          /> {/* Display product image */}
          
          <div className="flex flex-col justify-between mt-2">
            <h3 className="text-xl font-semibold">{product.title}</h3> {/* Display product title */}
            <p className="text-gray-700">${product.price}</p> {/* Display product price */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
