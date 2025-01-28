import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductSkeleton = ({ count = 5 }) => {
  return (
    <div className="grid grid-cols-5 gap-4">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col border-2 border-gray-400 p-4 rounded-lg shadow-md bg-white w-60 h-96"
        >
          {/* Skeleton for Image */}
          <Skeleton height={160} />
          {/* Skeleton for Title */}
          <Skeleton height={20} width="80%" className="mt-2" />
          {/* Skeleton for Category */}
          <Skeleton height={15} width="60%" className="mt-2" />
          {/* Skeleton for Price */}
          <Skeleton height={15} width="40%" className="mt-2" />
        </div>
      ))}
    </div>
  );
};

export default ProductSkeleton;
