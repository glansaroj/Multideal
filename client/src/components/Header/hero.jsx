import React from 'react'
import Image from 'next/image';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineSync } from "react-icons/ai";
import { AiOutlineSafety} from "react-icons/ai";
import { AiOutlineComment} from "react-icons/ai";



function Hero() {
  return (
    <>
    <div className='mt-3 '>
    <div className='banner mt-7 w-full'>
      < Image  src='/Banner2.jpg' width={1500}  height={500} />

    </div>

    {/* Features */}
     {/* <div className='feature my-8  mt-20 flex justify-center'> */}

    {/* <div className='w-11/12  flex justify-between border bg-white shadow-md px-7 items-center  h-32'> */}

    {/* 1 */}
    {/* <div className='free flex items-center gap-2.5'>
    <div className='text-5xl text-yellow-500'> < AiOutlineShoppingCart /> </div>
    <div>
        <h1 className='text-md font-bold text-slate-900'>Free Shipping</h1>
        <p className='text-gray-500 text-sm'>When ordering over $100</p>
    </div>
    </div> */}

  
    {/* 2 */}
       {/* <div className='free flex items-center gap-2.5'>
    <div className='text-5xl text-yellow-500'> <AiOutlineSync /> </div>
    <div>
        <h1 className='text-md font-bold text-slate-900'>20 Days Return</h1>
        <p className='text-gray-500 text-sm'>If goods have problems</p>
    </div>
    </div> */}


    {/* 3 */}
      {/* <div className='free flex items-center gap-2.5'>
    <div className='text-5xl text-yellow-500'> <AiOutlineSafety /> </div>
    <div>
        <h1 className='text-md font-bold text-slate-900'>Secure Payment</h1>
        <p className='text-gray-500 text-sm'>100% secure payment</p>
    </div>
    </div> */}



    
    {/* 4 */}
    {/* <div className='free flex items-center gap-2.5'>
    <div className='text-5xl text-yellow-500'> <AiOutlineComment /> </div>
    <div>
        <h1 className='text-md font-bold text-slate-900'>24/7 Support</h1>
        <p className='text-gray-500 text-sm'>Dedicated support</p>
    </div>
    </div> */}



    {/* </div> */}

    {/* </div>  */}

    </div>


    </>
  )
}

export default Hero;