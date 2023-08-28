import Image from "next/image";
import React from "react";
import {
  StarFilled,
  ShoppingCartOutlined,
  HeartOutlined,
} from "@ant-design/icons";

const productCard = () => {
  return (
    <>
      <div className="productbox flex-col ">
        <div className=" h-[365px] w-[280px] bg-white hover:outline hover:outline-yellow-500 hover:outline-1  transition duration-1000 ease-in-out cursor-pointer   ">

          {/* Heart & tag */}
          <div className="heart flex items-center justify-between mt-2 pt-3 px-3">
            <div className="tag bg-red-500 w-16 text-xs text-white rounded-lg   h-5 text-center ">Hot Sale</div>

          <div className=" ">
            <HeartOutlined classID="cursor-pointer product text-md pl-3 mt-3" />
          </div>

          </div>
         
          <Image
            src="/apple watch.png"
            alt="apple watch"
            width={380}
            height={380}
            srcset=""
            className="-pt-5 hover:scale-110 transition duration-300 ease-in-out cursor-pointer"
          />

          <div className="discription ml-3 mb-2 -mt-4 ">
            <h1 className="text-slate-800 font-normal text-lg mt-0 ">
              Apple watch series 8
            </h1>
            <div className="flex gap-2 mt-0.5">
              <p className="text-slate-800 text-xl font-semibold">Rs.5000</p>{" "}
              <p className="text-gray-500 text-md line-through font-light">
                Rs.5500
              </p>
            </div>

            <div className="pb-2">
              {" "}
              <StarFilled className="text-yellow-500 text-sm" />{" "}
              <StarFilled className="text-yellow-500 text-sm" />{" "}
              <StarFilled className="text-yellow-500 text-sm" />{" "}
              <StarFilled className="text-yellow-500 text-sm" />{" "}
              <StarFilled className="text-yellow-500 text-sm" />
            </div>
          </div>
          {/* Button */}
          <div className="flex  justify-center items-center   -mt-1.5">
            <button className="btn bg-slate-800 hover:outline hover:bg-yellow-500 hover:outline-yellow-500 hover:outline-1  transition duration-500  flex  gap-2 justify-center items-center ease-out text-white w-[280px] py-2.5 ">
              {" "}
              <ShoppingCartOutlined classID="add mr-2" />  Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default productCard;
