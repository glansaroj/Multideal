import Image from 'next/image'
import React from 'react'

const Product = () => {
  return (
    <>
    <div className='productbox flex-col'>

    <div className='h-[350px] w-[280px] bg-white  '>

    <Image src="/apple watch.png" alt="apple watch" width={400} height={400} srcset="" />

    <div className='discription ml-3 '>
    <div> ⭐⭐⭐⭐⭐</div>
    <h1 className='text-slate-800 text-lg font-medium'>Apple watch series 8</h1>
    <p className='text-red-600 text-xl font-bold'>$188.00</p>

    </div>
    




    </div>

    <div className='details'>

    </div>
    </div>

    </>
  )
}

export default Product