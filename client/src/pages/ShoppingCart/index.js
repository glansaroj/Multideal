
import React from 'react'
import Header from "@/components/Header/Header";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import Image from 'next/image';

const ShoppingCart = () => {
  return (
    <>
     <Header />
    <Navbar />

    <div className='w-full h-screen'>

    <h1 className='text-4xl font-bold text-slate-800 text-center mt-16'>My Cart</h1>


    <div className='flex  flex-col items-center justify-center'>
    <Image className='mt-4' src={'/cartEmpty.png'} width={'400'} height={'400'} />

    <h3 className='text-lg -mt-5 text-slate-800 font-bold '>Your cart is currently empty.</h3>

     <a className='bg-yellow-500 px-7 hover:bg-slate-800 text-white transition-3s font-semibold rounded-md shadow-md mt-5 py-3' href="">Back to Shop </a>



    </div>




    </div>


    <Footer />

    </>
  )
}

export default ShoppingCart;