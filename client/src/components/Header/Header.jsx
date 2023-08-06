import React from "react";
import Search from "./Search";
import Head from "next/head";
import Link from "next/link";
// import Wishlist from "./Wishlist";
import { AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import Register from "@/pages/auth/Register";
import Login from "@/pages/auth/Login";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router';
import { handleLogout } from "@/Redux/reducerSlice/users";
import Navbar from "./Navbar";
// import Logo from '/client/public/MDlogo.png'
import Image from "next/image";



// Header Components 
function Header() {
  const router = useRouter();
  const dispatch = useDispatch();
  const userLogout = () => {
    dispatch(handleLogout());
  };
  const { isLoggedIn, userDetails } = useSelector((state) => state.users);


  return (
    <div className="bg-slate-900 h-32 py-0  shadow-sm flex flex-row justify-between items-center">
    
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
      <div className="wishlist&cart flex gap-7 -mr-20 w-44 ">
        <div className="wishlist flex items-center justify-center rounded-full bg-white w-[40px] h-[40px] ">
          <Link href="/wishlist">
            <div className="text-slate-800 text-2xl">
              <AiOutlineHeart />
            </div>
          </Link>

          <div className="counter bg-yellow-500 w-5 h-5 rounded-full ml-9 mb-8 absolute flex items-center justify-center">
            <p className="font-semibold text-slate-800"> 4</p>
          </div>
        </div>

        <div className="cart flex items-center justify-center rounded-full bg-white w-[40px] h-[40px] ">
          <Link href={"/ShoppingCart"}>
            <div className="text-slate-800 text-2xl">
              <AiOutlineShoppingCart />
            </div>
          </Link>

          <div className="counter bg-yellow-500 w-5 h-5 rounded-full ml-9 mb-8 absolute flex items-center justify-center">
            <p className="font-semibold text-slate-800"> 1</p>
          </div>
        </div>
      </div>

      <div className="userlogin text-white mr-12 text-sm  gap-2 flex items-center">

      {/* Conditional Rendering */}
      {isLoggedIn ? (
        /* <---- AVATAR HERE ------> */
        <Avatar
          className="blue-500 w-12 h-12 mr-2 rounded-xl font-semibold text-2xl border-2 border-bg-white"
          size="[30px]"
          name={userDetails.fullName[0]}
          bg="gray"
        />) : 

        <>  
         
      {/* <------ User login Start -------> */}

        <div className="text-4xl font-medium">
          <AiOutlineUser />
        </div>
        <div className="flex flex-col">
          <Link className="mr-5" href="/auth/Login">
            {" "}
            Login
          </Link>
          <Link href="/auth/Register"> Register</Link>
        </div>
        </> }


        

     

       

      </div>
    </div>
  );
}

export default Header;
