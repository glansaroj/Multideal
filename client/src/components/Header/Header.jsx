"use client";

"use client";

import React, { useState } from "react";
import Search from "./Search";
import Head from "next/head";
import Link from "next/link";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import { CloseOutlined } from "@ant-design/icons";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import Register from "@/pages/auth/Register";
import Login from "@/pages/auth/Login";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { handleLogout } from "@/Redux/reducerSlice/users";
import Navbar from "./Navbar";
import Image from "next/image";
// import Wishlist from "@/pages/wishlist";
import { Drawer, Button } from "antd";
import { removeFromCart} from '@/Redux/reducerSlice/products';


// Header Components
function Header() {
  const router = useRouter();
  const dispatch = useDispatch();
  const userLogout = () => {
    dispatch(handleLogout());
  };
  const { isLoggedIn, userDetails } = useSelector((state) => state.users);

  const { cartList } = useSelector((state) => state.products);
  const { wishList } = useSelector((state) => state.products);

  
  // Shoping cart drawer
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

 

  let subTotal = 0;
  for(let {price} of cartList) {
    subTotal+= price;
  }


  return (
    <>
      {/* //TODO: Need to Fix this part ------????? */}
      <Drawer
        title="SHOPPING CART"
        placement="right"
        onClose={onClose}
        open={open}
      >
        {cartList.map((item) => {
          return (
            <>
              <div className="flex items-center justify-between mt-3 px-2">
                <div className="flex-grow-0 -ml-5 flex items-center justify-center">
                  <Image
                    // src={'http://localhost:5000/product-img/64d62d265618ef42bc171ea9'}
                    src={"http://localhost:5000/product-img/" + item.ID}
                    width={50}
                    height={70}
                    // alt="(item.title)"
                  ></Image>
                </div>

                <div className="flex-grow ">
                  <h1 className="text-slate-800 font-semibold text-lg">
                    {" "}
                    {item.title}
                    {/* Hawkins */}
                  </h1>
                  <h2 className="text-yellow-500 text-md font-normal">
                    {item.price}
                    <span className="text-slate-800 font-md text-sm"> * 1</span>
                  </h2>
                </div>

               
                
                  {/* <button>  <CloseOutlined /> </button> */}
               
                <div className="flex ">
                  <button onClick={() => dispatch(removeFromCart(item)) } className="text-slate-800  hover:text-yellow-500">
                    <CloseOutlined />
                  </button>
                </div>
              </div>

              <hr className="mt-5" />
            </>
          );
        })}

        <hr className="h-0.5 w-full bg-slate-300 mt-16 " />
      

        <div className="flex py-3 justify-between items-center">
          <h3 className="text-lg font-semibold text-slate-800">Subtotal:</h3>
          <h2 className="text-xl font-bold text-yellow-500">
            Rs. {subTotal}/-{" "}
          </h2>
        </div>

        <button className="w-full hover:bg-yellow-500 rounded-sm  font-semibold shadow-md mt-6 py-3 bg-slate-800 transition duration-400 text-white text-lg ">
          View cart
        </button>

        <Link href={'/Checkout'}> 
        <button  className="w-full py-3.5 mt-4 hover:bg-yellow-500 font-semibold rounded-sm shadow-md bg-white outline-2 border transition duration-400 border-yellow-500  hover:text-white text-lg text-slate-800 ">
          Checkout
        </button> </Link>
      </Drawer>

      <div className="bg-slate-900 h-24 py-0 top-0 sticky shadow-sm flex flex-row justify-between items-center">
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
              <p className="font-semibold text-slate-800"> {wishList.length}</p>
            </div>
          </div>

          <div className="cart flex items-center justify-center cursor-pointer rounded-full bg-white w-[40px] h-[40px] ">
            {/* <Link href={"/ShoppingCart"}> */}
            <div onClick={showDrawer} className="text-slate-800  text-2xl">
              <AiOutlineShoppingCart />
            </div>
            {/* </Link> */}

            <div className="counter bg-yellow-500 w-5 h-5 rounded-full ml-9 mb-8 absolute flex items-center justify-center">
              <p className="font-semibold text-slate-800"> {cartList.length}</p>
            </div>
          </div>
        </div>

        <div className="userlogin text-white mr-12 text-sm  gap-2 flex items-center">
          {/* Conditional Rendering */}
          {isLoggedIn ? (
            /* <---- AVATAR HERE ------> */
            <Link href={"/admin"}>
              <Avatar
                className="blue-500 w-11 h-11 mr-2 rounded-xl font-semibold text-xl border-2 border-bg-white"
                size="[30px]"
                name={userDetails.fullName[0]}
                bg="gray"
              />
            </Link>
          ) : (
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
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
