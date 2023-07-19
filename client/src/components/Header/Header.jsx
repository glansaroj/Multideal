
import React from 'react'
import Search from './Search'
import Head from 'next/head'
import Navbar from './Navbar'


function Header() {
  return (
    <div className='bg-slate-900 h-36 py-5  shadow-sm '>
        <h1 className='text-4xl font-semibold px-12 text-white'> MultiDeal</h1>
        <Head />
        <Search />
        <Navbar />
        

    </div>
  )
}

export default Header