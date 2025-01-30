
import React, { useState } from "react";
import { useProductsQuery } from "../../apiSlice/productApi"; // Replace with your API hook
import "bootstrap/dist/css/bootstrap.min.css";
import Skeleton from "react-loading-skeleton"; // Install this package
import "react-loading-skeleton/dist/skeleton.css";

const ProductSlider = () => {
  const token = localStorage.getItem("token");
  const { data: products, isLoading, isError } = useProductsQuery(token);
  const [activeIndex, setActiveIndex] = useState(0);
  // Handle carousel navigation
  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className="mt-5">
      <div
        id="productCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* Skeleton Loader */}
        {isLoading ? (
          <div className="carousel-inner">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <Skeleton
                  className="d-block w-100"
                  height={400}
                  style={{ objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        ) : (
          // Carousel Items
          <div className="carousel-inner">
            {products?.map((product, index) => (
              <div
                key={product.id}
                className={`carousel-item ${
                  index === activeIndex ? "active" : ""
                }`}
              >
                <img
                  src={product.image} // Assuming 'image' is the URL of the product image
                  className="d-block w-100"
                  alt={`Product ${index + 1}`}
                  style={{ height: "400px", objectFit: "contain" }} // Ensure the image fits entirely
                />
              </div>
            ))}
          </div>
        )}

        {/* Carousel Controls */}
        {!isLoading && (
          <>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
                style={{ backgroundColor: "black" }} // Set arrow color to black
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
                style={{ backgroundColor: "black" }} // Set arrow color to black
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductSlider;

