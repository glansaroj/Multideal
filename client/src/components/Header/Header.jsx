import React from "react";
import Search from "./Search";
import Head from "next/head";
import Link from "next/link";
// import Wishlist from "./Wishlist";
//
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";


import Register from "@/pages/auth/Register";
import Login from "@/pages/auth/Login";

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

      <div className="search mr-76">
        <Search />
      </div>


      {/* WISH LIST & CART */}
      <div className="wishlist&cart flex gap-6 -mr-20 w-44 ">

      <div className="wishlist">


      <div className="text-white text-4xl">
        <AiOutlineHeart />
      </div>

      </div>


    <div className="cart">

      <div className="text-white text-4xl relative">
      <div className="z-10">
      < AiOutlineShoppingCart />
      </div>
    </div>

        <div className="bg-yellow-500  -mt-4 h-6  z-40 w-6 rounded-full flex items-center text-center justify-center">
        <span className="text-black text-xs font-semibold">1</span>
        </div>
      </div>

      </div>




    

      <div className="userlogin text-white mr-12 text-sm  gap-2 flex items-center">

        <div className="text-4xl font-medium">
          <AiOutlineUser />
        </div>

        <div className="flex flex-col">
          <Link className="mr-5" href="/auth/Login">
            {" "}
            Login
          </Link>
          <Link href='/auth/Register'> Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
