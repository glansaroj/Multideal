
import React from 'react'
import Link from 'next/link';

import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";


function Navbar() {
  return (
    <div className=' border-t-white mt-0 py-5 sticky top-0 bg-slate-800 shadow-md text-white px-12 flex justify-between'>
    
    <div className='flex items-center gap-2 '>

    <div className='text-xl'>
    <AiOutlineMenu />
    </div>

    <div>
    <h1 className='font-medium text-lg'>  Shopping Categories</h1>


    </div>


    </div>

    

    <div className='font-medium text-md gap-10'>
        <a className='' href=''>Home</a>
        <a className='ml-8' href=''>Shop</a>
        <a className='ml-8' href=''>Pages</a>
        <a className='ml-8' href=''>Customer Service</a>
     <a className='ml-8' href=''>My order</a>

    </div> 


    

    <div>
     <Link className='ml-8 mr-5 text-lg text-white font-semibold bg-yellow-500 py-2.5 px-5 rounded-sm' href='/auth/shopListing'>Become a Seller  </Link> 

    </div>
    </div>
  )
}

export default Navbar