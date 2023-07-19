
import React from 'react'

function Navbar() {
  return (
    <div className='border-1 mt-8 py-5 bg-slate-800 text-white px-12 flex justify-between'>
    <h1 className=' font-medium'>Shopping Categories</h1>

    <div className='font-thin'>
        <a className='' href=''>Home</a>
        <a className='ml-8' href=''>Shop</a>
        <a className='ml-8' href=''>Pages</a>
        <a className='ml-8' href=''>Customer Service</a>
    </div> 

    <div>
     <a className='ml-8 mr-5' href=''>Sell on MultiDeal</a> |
     <a className='ml-8' href=''>My order</a>

    </div>
    </div>
  )
}

export default Navbar