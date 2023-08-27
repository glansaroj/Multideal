import React from 'react'
import Image from 'next/image'
import Header from "@/components/Header/Header";
import Link from 'next/link';
import Breadcrumb from '@/components/layouts/Breadcrumb';

import Footer from "@/components/Footer/Footer";


const PagenotFound = () => {
    return (
        <div>

            <Header />
            <Breadcrumb />


         
            <div className='w-full flex flex-col items-center justify-center'>
                <Image src={'/404.png'} width={'500'} height={'500'} ></Image>

                <h1 className='text-slate-800 font-bold text-4xl -mt-8 mb-6 '> Oops! Page not found</h1>

                {/* <p className='text-slate-800 font-semibold text-center text-md mt-3'> Sorry, This is embarassing.  <br /> Looks like the page you were looking for was not found.</p> */}

                <Link className='bg-slate-800 rounded shadow-md transition duration-300 ease-in-out hover:bg-yellow-500 text-white font-normal text-xl px-6 py-3' href={'/'}> Back to Home</Link>

            </div>

            <Footer />

        </div>
    )
}

export default PagenotFound
