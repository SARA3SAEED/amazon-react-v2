import { useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


export default function Details() {
  const {id} =useParams();
  const navigate =useNavigate();
  const [product, setProduct]=useState([]);



  useEffect(()=>{
    fetchProduct();
  },[]);


  const fetchProduct = async ()=>{
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    const data = response.data;
    console.log('Get Data:', data);
    setProduct(data);
  }


  const [products, setProducts]=useState([]);


  const postProduct = async (event)=>{
    event.preventDefault();
   
    const userId = localStorage.getItem('userId')
    const productData ={
      productId: [id]
    }
    
    const res = await axios.put(`https://668a9a912c68eaf3211d458f.mockapi.io/user/${userId}`, productData);
    setProducts(res.data);
    console.log(res.data)
    navigate('/cart');

  }





  return (
    <>
      <Nav />
      <div className=" h-[500px] w-[100%] flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:max-w-xl md:flex-row">
      <img
        className="h-96 w-[60%] rounded p-2  object-cover md:h-auto "
        src={product.image}
        alt=""
      />
      <div className="w-[40%]  flex flex-col justify-start p-6">
        <h5 className="w-full mt-20 mb-2 text-xl font-medium ">{product.title}</h5>
        <p className="w-full mb-4 text-base ">
        {product.description}
        </p>
        <p className="w-full text-xl text-surface/75 dark:text-neutral-300">
        {product.price} $.
        </p>
            <a 
                  onClick={postProduct}
                  className="mt-7 p-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  > Add to cart </a> </div> </div>
        </>
  )
}
