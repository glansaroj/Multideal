
import React from 'react'

function Navbar() {
  return (
    <div className=' border-t-white mt-0 py-5 bg-slate-800 shadow-md text-white px-12 flex justify-between'>
    <h1 className='font-medium text-lg'>Shopping Categories</h1>

    <div className='font-medium text-md gap-9'>
        <a className='' href=''>Home</a>
        <a className='ml-8' href=''>Shop</a>
        <a className='ml-8' href=''>Pages</a>
        <a className='ml-8' href=''>Customer Service</a>
     <a className='ml-8' href=''>My order</a>

    </div> 

    <div>
     <a className='ml-8 mr-5 text-lg text-white font-semibold bg-yellow-500 py-2.5 px-5 rounded-md' href=''>Become a Seller</a> 

    </div>
    </div>
  )
}

export default Navbar