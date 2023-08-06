import Image from "next/image";
import React from "react";
import {
  StarFilled,
  ShoppingCartOutlined,
  HeartOutlined,
} from "@ant-design/icons";

const Product = () => {
  return (
    <>
      <div className="productbox flex-col">
        <div className="h-[400px] w-[280px] bg-white  ">
          <div className="pt-3 pl-3">
            <HeartOutlined classID="product text-md pl-3 mt-3" />
          </div>
          <Image
            src="/apple watch.png"
            alt="apple watch"
            width={380}
            height={380}
            srcset=""
            className="-pt-3"
          />

          <div className="discription ml-3 mb-2 -mt-2 ">
            <h1 className="text-slate-800 font-normal text-lg mt-0 ">
              Apple watch series 8
            </h1>
            <div className="flex gap-2 mt-0.5">
              <p className="text-slate-800 text-xl font-semibold">$188.00</p>{" "}
              <p className="text-gray-400 text-md line-through font-light">
                $200.20
              </p>
            </div>

            <div>
              {" "}
              <StarFilled className="text-yellow-500 text-sm" />{" "}
              <StarFilled className="text-yellow-500 text-sm" />{" "}
              <StarFilled className="text-yellow-500 text-sm" />{" "}
              <StarFilled className="text-yellow-500 text-sm" />{" "}
              <StarFilled className="text-yellow-500 text-sm" />
            </div>
          </div>
          {/* Button */}
          <div className="flex justify-center items-center   mt-6">
            <button className="btn bg-slate-800 hover:bg-yellow-500 duration-300 ease-out text-white w-[280px] py-2 ">
              {" "}
              <ShoppingCartOutlined classID="add " /> Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
