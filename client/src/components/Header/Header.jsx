import React from "react";
import Search from "./Search";
import Head from "next/head";
import Link from "next/link";

import Navbar from "./Navbar";
// import Logo from '/client/public/MDlogo.png'
import Image from "next/image";

function Header() {
  return (
    <div className="bg-slate-900 h-36 py-4  shadow-sm flex flex-row justify-between items-center">
      {/* <h1 className='text-4xl font-semibold px-12 text-white'> MultiDeal</h1> */}

    
        <div className="logo">
          <a href="/">
            <Image
              src="/MDlogo.png"
              width={330}
              height={150}
              alt="Multideal Logo"
            />
          </a>
        </div>

        <div className="mr-80">
          <Search />
        </div>

        <div className="text-white mr-12 text-sm flex flex-col">
          <Link className="mr-5" href='/Login/login'> Login</Link>
          <Link href={''}> Register</Link>

        </div>


      


    </div>
    
  

  );
}

export default Header;
