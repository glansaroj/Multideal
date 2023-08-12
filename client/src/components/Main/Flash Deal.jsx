import React from "react";
import Product from "../Product card/product";
import Link from "next/link";

function FlashDeal() {
 
  return (
    <div className="bg-indigo-50 h-[1500px] w-full  mt-20 shadow-sm px-12">
      <div className="title flex  justify-between items-center pt-7">
        <div className="flex deal justify-between items-center">
          <span className="py-7 px-1.5  bg-yellow-500"></span>
          <h1 className="text-2xl font-bold text-slate-800  ml-4">
            {" "}
            Flash Deals
          </h1>
        </div>

        <div>
          <Link
            className="bg-slate-800 hover:bg-yellow-500 text-white  transition duration-400 ease-out font-normal py-3 px-6" href='/shop' >                  
            View All Products
          </Link>
        </div>
      </div>

      <div className="flash product flex justify-between  flex-wrap mt-9">
        <Product />

        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default FlashDeal;
