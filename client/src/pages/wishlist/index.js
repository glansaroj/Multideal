
import React from 'react'
import Header from "@/components/Header/Header";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";


const Wishlist = () => {
  return (
    <>
    <Header />
    <Navbar />

    <div className='w-full h-screen'>

    <h1 className='text-5xl font-bold text-slate-800'>My wishList</h1>

    </div>


    <Footer />
    </>

  )
}

export default Wishlist