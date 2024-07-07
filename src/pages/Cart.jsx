import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import axios from 'axios';


export default function Cart() {
  const [carts, setCarts]=useState([]);

  useEffect(()=>{
    fetchCart();
  },[]);

  const fetchCart = async ()=>{
    const userId = localStorage.getItem('userId')
    const response = await axios.get(`https://668a9a912c68eaf3211d458f.mockapi.io/user/${userId}`);
    const data = response.data.productId;
    console.log('Get Data user of cart:', data);
    setCarts(data); }

  const [products, setProducts]=useState([]);

  useEffect(()=>{
    fetchProduct();
  },[]);

  const fetchProduct = async ()=>{
    const response = await axios.get(`https://fakestoreapi.com/products/${carts}`);
    setProducts(response.data);
  }


  return (
    <>
      <Nav />
      

      <div className="w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Latest Customers
          </h5>
          <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            View all
          </a>
        </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="w-20 h-14 rounded"
                    src={products.image}
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                   {/* {products.title} */}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {products.title}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  {products.price} $.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </>
  )
}
