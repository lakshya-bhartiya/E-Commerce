import React from 'react'
import NavBar from '../../components/navBar/NavBar'
import ProductCard from '../../components/productCard/productCard'
import Footer from '../../components/footer/Footer'
import { useGetProductsByCategoryQuery } from '../../apiSlice/categoryApi'
import ProductSkeleton from '../../components/skeleton/ProductSkeleton'

const WomenClothing = () => {

    const token = localStorage.getItem('token')
    const{data, isLoading} = useGetProductsByCategoryQuery({category:"women's clothing", token})
  return (
    <div className='overflow-hidden'>
      <header>
        <NavBar/>
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

export default WomenClothing
