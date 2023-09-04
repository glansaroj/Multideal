import React from "react";
import productCard from "../Products/productCard";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addToCartList, addToWishList } from "@/Redux/reducerSlice/products";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";

// import ProductDetails from '../product-details/[itemId]';
import ProductDetails from "@/pages/product-details/[itemId]";
import {
  StarFilled,
  ShoppingCartOutlined,
  HeartOutlined,
  HeartFilled,
  HomeOutlined,
} from "@ant-design/icons";

function FlashDeal() {
  const dispath = useDispatch();

  // Fetching all product
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/products");
    const { data } = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // For Wishlist icon change
  const [clicked, setClicked] = useState(false);
  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <div className="bg-indigo-50 h-[630px] w-full  mt-20 shadow-sm px-12">
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
            className="bg-slate-800 hover:bg-yellow-500 text-white  transition duration-400 ease-out font-normal py-3 px-6"
            href="/shop"
          >
            View All Products
          </Link>
        </div>
      </div>

      {/* <div className="flash product flex justify-between  flex-wrap mt-9">
        <productCard  />
        <productCard  />
        <productCard  />
        <productCard  />        
      </div> */}

      <div className="w-full  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {products
        .filter((item) => item.category === 'clothing')
        .map((item) => (
          
            <Link
              href={`/product-details/${item._id}`}
              key={item._id}
              component={ProductDetails}
            >
              <div className="flash  product flex  justify-between   mt-9">
                <div className="productbox flex-col">
                  {/* <div className=" h-[365px] w-[280px] bg-white hover:shadow-xl  hover:outline hover:outline-yellow-500 hover:outline-1  transition duration-1000 ease-in-out cursor-pointer "> */}
                  <div className="w-[280px] bg-white text-black  border border-gray-300 rounded-lg group overflow-hidden    hover:outline hover:outline-yellow-400 hover:outline-1  transition duration-1000 ease-in-out">
                    {/* Heart & tag */}
                    <div className="heart flex items-center justify-between mt-1 pt-3 px-3">
                      <div className="tag bg-green-500 w-12 text-xs text-white rounded-xl   h-5 text-center ">
                        New Product
                      </div>

                      <div
                        onClick={() => {
                          // dispath(addToWishList({ ID: item._id, title: item.productName, price: item.price, image: 'http://localhost:5000/product-img/' + item._id }));
                          dispath(
                            addToWishList({
                              ID: item._id,
                              title: item.productName,
                              price: item.price,
                              image:
                                "http://localhost:5000/product-img/" + item._id,
                            })
                          );
                          toast.success(
                            `${item.productName} added to your Wish List`
                          );
                        }}
                        className=" hover:scale-125"
                      >
                        <HeartFilled
                          onClick={handleClick}
                          className="text-rose-400"
                        />

                        {/* {clicked ?
                                                    <HeartFilled onClick={handleClick} className='text-rose-400' /> :
                                                    <HeartOutlined onClick={handleClick} className="cursor-pointer text-rose-400 product text-md pl-3 mt-3" />} */}
                      </div>
                    </div>

                    {/* Image */}

                    <Image
                      src={"http://localhost:5000/product-img/" + item._id}
                      alt="apple watch"
                      width={380}
                      height={380}
                      srcset=""
                      // className="   transition duration-300 ease-in-out cursor-pointer"
                      className="w-full z-10 h-full cursor-pointer -mt-4 object-cover scale-90 hover:scale-100 transition-transform duration-300"
                    />
                    <div className="px-3 -mt-5">
                      <hr />
                    </div>

                    {/* Name & Price */}
                    <div className="discription ml-3 mb-1.5 mt-1 ">
                      <p className="text-xs text-gray-400 tracking-wide">
                        {item.category}
                      </p>
                      <Link
                        href={`/product-details/${item._id}`}
                        key={item._id}
                        component={ProductDetails}
                      >
                        <h1 className="text-slate-800 font-semibold hover:font-semibold hover:text-yellow-500 text-lg mt-0.5 ">
                          {item.productName}
                        </h1>
                      </Link>

                      <div className="flex items-end gap-1.5 -mt-1">
                        <p className="text-green-500 text-xl font-semibold">
                          Rs.{item.price}
                        </p>{" "}
                        <p className="text-gray-500 text-normal line-through font-light">
                          Rs.4500
                        </p>
                      </div>
                    </div>

                    <div className="rating pb-3  px-3">
                      {" "}
                      <StarFilled className="text-yellow-500 text-sm" />{" "}
                      <StarFilled className="text-yellow-500 text-sm" />{" "}
                      <StarFilled className="text-yellow-500 text-sm" />{" "}
                      <StarFilled className="text-yellow-500 text-sm" />{" "}
                      <StarFilled className="text-yellow-500 text-sm" />
                    </div>

                    {/* Button */}
                    <div className="flex  justify-center items-center   -mt-1.5">
                      <button
                        onClick={() => {
                          dispath(
                            addToCartList({
                              ID: item._id,
                              title: item.productName,
                              price: item.price,
                              image:
                                "http://localhost:5000/product-img/" + item._id,
                            })
                          );
                          toast.success(`${item.productName} added to cart`);
                        }}
                        className="btn bg-slate-800 hover:outline hover:bg-yellow-500 hover:outline-yellow-500 hover:outline-1  transition duration-500  flex  gap-2 justify-center items-center ease-out text-white w-[280px] py-2.5 "
                      >
                        {" "}
                        <ShoppingCartOutlined classID="add mr-2" /> Add to cart
                      </button>
                      <ToastContainer
                        position="top-center"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                      />
                    </div>
                  </div>
                </div>

                {/* <Skeleton /> */}
              </div>{" "}
            </Link>
        ))}
        
      </div>
    </div>
  );
}

export default FlashDeal;
