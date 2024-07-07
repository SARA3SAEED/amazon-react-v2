import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';



export default function Cart() {
  const [carts, setCarts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  useEffect(() => {
    if (carts.length > 0) {
      fetchProducts();
    }
  }, [carts]);

  const fetchCart = async () => {
    const userId = localStorage.getItem('userId');
    const response = await axios.get(`https://668ae97f2c68eaf3211e2fa9.mockapi.io/user/${userId}`);
    const data = response.data.productId;
    console.log('Get Data user of cart:', data);
    setCarts(data);
  };




  const fetchProducts = async ()=>{
    const productData = [];
    for (const productId of carts) {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      productData.push(response.data);
    }

    const productMap = productData.reduce((acc, product) => {
      if (acc[product.id]) { acc[product.id].quantity += 1;} 
      else{acc[product.id] = { ...product, quantity: 1 };}
      return acc;
    }, {});
    console.log("Get :",productMap)
    setProducts(Object.values(productMap));
  }



  // const fetchProducts = async () => {
  //   const productMap = {};

  //   for (const productId of carts) {
  //     const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
  //     const product = response.data;

  //     if (productMap[product.id]) {
  //       productMap[product.id].quantity += 1;
  //     } else {
  //       productMap[product.id] = { ...product, quantity: 1 };
  //     }
  //   }

  //   setProducts(Object.values(productMap));
  // };


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
        <div  className="flow-root">
          <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
          {products.map((product,index) => (
            <li   key={product.id ? product.id : `${product.title}-${index}`} className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="w-20 h-14 rounded"
                    src={product.image}
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {product.title} (x{product.quantity})
                    </p>
                  </div>

                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                ${product.price}
                </div>
              </div>
            </li>
             ))}
          </ul>
        </div>
        <div className="flex items-center justify-end mb-1">
        <Link to={'/pay'}
                    className=" w-44 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  > Pay </Link>
      </div>
      </div>

     

    </>
  )
}
