import React from 'react'
import ProductCard from './ProductCard'
import { useAppContext } from '../context/AppContext';

const BestSeller = () => {
    const { products } = useAppContext();
  return (
    <div className='mt-12'>
      <p className='text-2xl md:text-4xl font-extrabold'>Best Sellers</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6'>
        {products.filter((product)=> product.inStock).slice(0,10).map((product, index)=>(
            <ProductCard key={index} product={product}/>
        ))}
        
      </div>
    </div>
  )
}

export default BestSeller
