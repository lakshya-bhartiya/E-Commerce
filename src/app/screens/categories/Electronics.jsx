import React from 'react'
import { useGetProductsByCategoryQuery } from '../../apiSlice/categoryApi'
import { data } from 'react-router-dom'
import NavBar from '../../components/navBar/NavBar'
import Footer from '../../components/footer/Footer'
import ProductCard from '../../components/productCard/productCard'
import ProductSlider from '../../components/productSlider/ProductSlider'
import ProductSkeleton from '../../components/skeleton/ProductSkeleton'

const Electronics = () => {

    const token  = localStorage.getItem('token')
    const {data, isLoading} = useGetProductsByCategoryQuery({category:"electronics", token})
    console.log(data)
  return (
    <div className='overflow-hidden'>
        <header>
            <NavBar />
        </header>
        <main>
           {isLoading ? <ProductSkeleton count={6}/> : <ProductCard products={data}/>}
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}

export default Electronics
