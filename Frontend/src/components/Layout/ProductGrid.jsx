import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchAllProducts } from '../../redux/Slices/productSlice';

const ProductGrid = () => {
   
    const {products, loading, error} = useSelector((state)=>state.products);
    
    const dispatch = useDispatch();

    useEffect(()=>{
 
        dispatch(fetchAllProducts());
    },[dispatch])

  return (
    <div className='w-full h-full px-10 my-5'>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {products.map((product, index) => (
        
      <Link key={index} to={`/product/${product._id}`} className="block">
        <div className="bg-white p-4 border rounded-lg">
          <div className="w-full h-96 mb-4 p-4">
            <img src={product.url}  className="w-full h-full object-cover rounded-lg" />
          </div>
            <h2>    
            {product.quantity}
            </h2>
          <h3 className="text-sm mb-2 ">{product.title}</h3>
          <p className="text-gray-500 font-medium text-sm tracking-tighter">$ {product.price}</p>
        </div>
      </Link>
    ))}
  </div>
    </div>
  )
}

export default ProductGrid