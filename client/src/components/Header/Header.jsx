import React, { useState } from "react";
import Search from "./Search";
import Head from "next/head";
import Link from "next/link";
// import Wishlist from "./Wishlist";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  CloseOutlined,
  SearchOutlined,
} from "react-icons/ai";
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

  console.log(wishList);

  // Shoping cart drawer
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
    {/* //TODO: Need to Fix this part ------????? */}
      <Drawer
        title="SHOPPING CART"
        placement="right"
        onClose={onClose}
        open={open}
      >
        {wishList.map((a) => {
          return (
            <>
              <div className="flex justify-between">
                <div className="grow">Image</div>

                <div className="name flex-grow">
                  <h1 className="text-slate-800 font-semibold text-lg">
                    {" "}
                    Hawkins Cooker
                  </h1>
                  <h2 className="text-yellow-500 text-md font-normal">
                    Rs.5500{" "}
                    <span className="text-slate-800 font-md text-sm"> * 1</span>
                  </h2>
                </div>

{/* 
                <div>
                  <button> <SearchOutlined /> </button>     
                </div> */}


               
              

              </div>
              <hr  className="mt-5"/>

            </>
          );
        })}

        <hr className="h-0.5 w-full bg-slate-300 mt-16 " />

        <div className="flex py-3 justify-between items-center">
          <h3 className="text-lg font-semibold text-slate-800">Subtotal:</h3>
          <h2 className="text-xl font-bold text-yellow-500">Rs25000 /-</h2>
        </div>

        <button className="w-full hover:bg-yellow-500 rounded-sm  font-semibold shadow-md mt-6 py-3 bg-slate-800 transition duration-400 text-white text-lg ">
          View cart
        </button>
        <button className="w-full py-3.5 mt-4 hover:bg-yellow-500 font-semibold rounded-sm shadow-md bg-white outline-2 border transition duration-400 border-yellow-500  hover:text-white text-lg text-slate-800 ">
          Checkout
        </button>
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
