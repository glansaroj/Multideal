
import Header from '@/components/Header/Header'
import Navbar from '@/components/Header/Navbar'
import React, {useEffect, useState} from 'react'


const Products = () => {
    const [products,setProducts]= useState([])
    const fetchProducts= async()=> {
     const res= await fetch('http://localhost:5000/products')
      const {data} =await res.json()
      setProducts(data)
    }


    // Fetching on first load --->
    useEffect(() => {
        fetchProducts()
      },[])

  return (
    <div>
        <Header />
        <Navbar />

        <h1> All prudcts:</h1>

      
    </div>
  )
}

export default Products
