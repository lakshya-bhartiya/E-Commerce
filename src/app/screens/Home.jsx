import React from 'react';
import ProductCard from '../components/productCard/productCard';
import ProductSlider from '../components/productSlider/ProductSlider';
import NavBar from '../components/navBar/NavBar';
import Footer from '../components/footer/Footer';
import { useProductsQuery } from '../apiSlice/productApi';
import ProductSkeleton from '../components/skeleton/ProductSkeleton';

const Home = () => {

  const token = localStorage.getItem('token');
  const { data: products, isLoading, isError } = useProductsQuery(token);
  return (
    <div>
      {/* Navbar */}
      <header>
        <NavBar />
      </header>
      <main>
        <div>
          <ProductSlider />
        </div>
        {/* Product Cards */}
        <div className="p-4">
          {isLoading ? <ProductSkeleton count={20}/>:<ProductCard products={products}/>}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
