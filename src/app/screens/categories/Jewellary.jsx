import React from 'react'
import NavBar from '../../components/navBar/NavBar'
import ProductCard from '../../components/productCard/productCard'
import Footer from '../../components/footer/Footer'
import { useGetProductsByCategoryQuery } from '../../apiSlice/categoryApi'
import ProductSkeleton from '../../components/skeleton/ProductSkeleton'

const Jewellary = () => {
    const token = localStorage.getItem('token')
    const { data, isLoading } = useGetProductsByCategoryQuery({category: "jewelery", token})
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <main>
        {isLoading ? <ProductSkeleton count={4}/> : <ProductCard products={data}/>}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Jewellary
