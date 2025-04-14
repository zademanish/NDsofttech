import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createProduct } from '../../redux/Slices/adminProductSlice';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const [add, setAdd] = useState([]);
    const [newData,setnewData] = useState([])
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector(
        (state) => state.products
      );


    const handleSubmit = (e) => {
        setnewData(add);
        e.preventDefault();
        dispatch(createProduct(newData))
        navigate("/admin/products");
      };
    
      if (loading) return <p>Loading ...</p>;
      if (error) return <p>Error : {error}</p>;
      

  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
    <h2 className="text-3xl font-bold mb-6">ADD Product</h2>
    <form onSubmit={handleSubmit}>
      {/* Name */}
      <div className="mb-6">
        <label className="block font-semibold mb-2">Product Name</label>
        <input
          type="text"
          name="title" 
          value={add.title}
          onChange={(e)=>setAdd({[e.target.name]:e.target.value})}  
          className="w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>

      {/* Description */}
      <div className="mb-6">
        <label className="block font-semibold mb-2">Description</label>
        <textarea
          name="description"
          value={add.description}
          onChange={(e)=>setAdd({[e.target.name]:e.target.value})}  
          className="w-full border border-gray-300 rounded-md p-2"
          rows={4}
          required
        />
      </div>
      {/* price */}
      <div className="mb-6">
        <label className="block font-semibold mb-2">Price</label>
        <input
          type="number"
          name="price"
          value={add.price}
          onChange={(e)=>setAdd({[e.target.name]:e.target.value})}  
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="mb-6">
        <label className="block font-semibold mb-2">url</label>
        <input
          type="input"
          name="url"
          value={add.url}
          onChange={(e)=>setAdd({[e.target.name]:e.target.value})}  
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div className="mb-6">
        <label className="block font-semibold mb-2">Quantity</label>
        <input
          type="number"
          name="quantity"
          value={add.quantity}
          onChange={(e)=>setAdd({[e.target.name]:e.target.value})}  
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors"
      >
        Add Product
      </button>
    </form>
  </div>
  )
}

export default AddProduct