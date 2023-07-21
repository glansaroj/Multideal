import React from "react";
import Search from "./Search";
import Head from "next/head";
import Link from "next/link";
//
import { AiOutlineUser } from "react-icons/ai";
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

      <div className="mr-80">
        <Search />
      </div>

      <div className="text-white mr-12 text-sm  gap-2 flex items-center">

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
