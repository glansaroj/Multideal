
import React from 'react'
import Header from "@/components/Header/Header";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import Image from 'next/image';


const Wishlist = () => {
  return (
    <>
    <Header />
    <Navbar />

    <div className='w-full h-screen'>

    <h1 className='text-4xl font-bold text-slate-800 text-center mt-16'>My wishList</h1>


    <div className='flex  flex-col items-center justify-center'>
    <Image className='mt-4' src={'/empty.png'} width={'500'} height={'500'} />

    <h3 className='text-lg -mt-5 text-slate-800 font-bold '>Your Wish list is empty</h3>

     <a className='bg-yellow-500 px-6 text-white font-semibold rounded-sm shadow-md mt-5 py-2.5' href="">Go to Shop </a>



    </div>




    </div>


    <Footer />
    </>

  )
}

export default Wishlist