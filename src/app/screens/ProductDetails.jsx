import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetSingleProductQuery } from '../apiSlice/productApi'
import NavBar from '../components/navBar/NavBar'
import Footer from '../components/footer/Footer'

const ProductDetails = () => {

    const { id } = useParams()
    const token = localStorage.getItem('token')
    const { data: product } = useGetSingleProductQuery({ id, token })

    return (
        <div>
            <NavBar />
            <div className="flex flex-col md:flex-row items-center md:items-start mt-10 gap-10 px-5 md:px-20">
                {/* Left Section - Product Image & Add to Cart */}
                <div className="w-full md:w-1/3 flex flex-col items-center">
                    <img
                        src={product?.image}
                        alt={product?.title}
                        className="w-64 h-64"
                    />
                    <button className="mt-6 bg-blue-500 hover:bg-cyan-700 text-white text-lg font-semibold py-2 px-6 rounded-lg transition duration-300">
                        Add to Cart
                    </button>
                </div>

                {/* Right Section - Product Details */}
                <div className="w-full md:w-2/3 flex flex-col gap-4">
                    <h3 className="text-2xl font-bold">{product?.title}</h3>
                    <p className="text-gray-600">
                        <span className="font-semibold">Rating:</span> {product?.rating?.rate} ⭐
                    </p>
                    <p className="text-gray-600">
                        <span className="font-semibold">Reviews:</span> {product?.rating?.count}
                    </p>
                    <p className="text-xl font-semibold text-green-700">
                        Price: ${product?.price}
                    </p>
                    <p className="text-gray-700 leading-relaxed">{product?.description}</p>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default ProductDetails
