import React from 'react';
import Product from '../Product card/product';

function FlashDeal() {
  return (
    <div className='bg-indigo-50 h-[1000px] w-full  mt-20 shadow-sm px-12'>

        <div className='title flex items-center pt-6'>
        <div className='h-10 w-1.5 bg-yellow-500'></div>
        <h1 className='text-2xl font-semibold text-slate-900  ml-4'>  Flash Deals</h1>
        </div>


        <div className='flash product flex justify-between mt-8'>


        <Product />

        <Product />
        <Product />
        <Product />

        </div>










        

    </div>
  )
}

export default FlashDeal