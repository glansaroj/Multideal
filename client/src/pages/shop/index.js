import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import {
    StarFilled,
    ShoppingCartOutlined,
    HeartOutlined,
    HeartFilled,
} from "@ant-design/icons";
import { Skeleton } from 'antd';
import { addToCartList, addToWishList } from '@/Redux/reducerSlice/products';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Products from '../products';
import Link from 'next/link';
import ProductDetails from '@/components/Products/ProductsDetails';



const Shop = () => {
    <Skeleton active />
    const dispath = useDispatch();

    // Fetching all product
    const [products, setProducts] = useState([])
    const fetchProducts = async () => {
        const res = await fetch('http://localhost:5000/products')
        const { data } = await res.json()
        setProducts(data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])


    // For Wishlist icon change  
    const [clicked, setClicked] = useState(false);
    function handleClick() {
        setClicked(!clicked);
        

    }




    // const addToWish = () => {
    //     dispath(addToWishList(products._id));
    //     toast.success(`New product to wish List`);

    // }



    return (
        <>

            <Header />
            <div className="bg-indigo-50 h-2000px] w-full   -mt-7  px-12 py-10">

                {/* Card Ternery  */}
                {products.length > 0 ? (

                    <div className="product flex justify-between gap-8 space-y-12 flex-wrap mt-9">
                        {products.map((item) => {
                            return <div className="flash  product flex  justify-between   mt-9">

                                <div className="productbox flex-col" >
                                    <div className=" h-[365px] w-[280px] hover:shadow-xl bg-white hover:outline hover:outline-yellow-500 hover:outline-1  transition duration-1000 ease-in-out cursor-pointer ">
                                        {/* Heart & tag */}
                                        <div className="heart flex items-center justify-between mt-2 pt-3 px-3">
                                            <div className="tag bg-red-500 w-16 text-xs text-white rounded-lg   h-5 text-center ">Hot Sale</div>

                                            <div onClick={() => {
                                                // dispath(addToWishList({ ID: item._id, title: item.productName, price: item.price, image: 'http://localhost:5000/product-img/' + item._id }));
                                                dispath(addToWishList({ID: item._id, title: item.productName, price: item.price, image: 'http://localhost:5000/product-img/' + item._id}));                                      
                                                toast.success(`${item.productName} added to your Wish List`);


                                            }} className=" hover:scale-125">
                                                    <HeartFilled onClick={handleClick} className='text-rose-400' /> 

                                                {/* {clicked ?
                                                    <HeartFilled onClick={handleClick} className='text-rose-400' /> :
                                                    <HeartOutlined onClick={handleClick} className="cursor-pointer text-rose-400 product text-md pl-3 mt-3" />} */}
                                            </div>

                                        </div>

                                        {/* Image */}
                                        <Image
                                            src={'http://localhost:5000/product-img/' + item._id}
                                            alt="apple watch"
                                            width={380}
                                            height={380}
                                            srcset=""
                                            className="-pt-5  transition duration-300 ease-in-out cursor-pointer"
                                        />

                                        {/* Name & Price */}
                                        <div className="discription ml-3 mb-1.5 -mt-4 ">
                                            <Link href={`/product-details/${item._id}`} key={item._id} component={ProductDetails}> 
                                            <h1 className="text-slate-800 font-normal hover:text-semibold hover:text-yellow-500 text-lg mt-0 ">
                                                {item.productName}
                                            </h1>
                                            </Link>
                                            <div className="flex gap-2 mt-0.5">
                                                <p className="text-slate-800 text-xl font-semibold">Rs.{item.price}</p>{" "}
                                                <p className="text-gray-500 text-md line-through font-light">
                                                    Rs.4500
                                                </p>
                                            </div>
                                        </div>

                                        <div className="rating pb-2 ml-3">
                                            {" "}
                                            <StarFilled className="text-yellow-500 text-sm" />{" "}
                                            <StarFilled className="text-yellow-500 text-sm" />{" "}
                                            <StarFilled className="text-yellow-500 text-sm" />{" "}
                                            <StarFilled className="text-yellow-500 text-sm" />{" "}
                                            <StarFilled className="text-yellow-500 text-sm" />
                                        </div>

                                        {/* Button */}
                                        <div className="flex  justify-center items-center   -mt-1.5">
                                            <button onClick={() => {
                                                dispath(addToCartList({ ID: item._id, title: item.productName, price: item.price, image: 'http://localhost:5000/product-img/' + item._id }));
                                                 toast.success(`${item.productName} added to cart`);
                                            }} className="btn bg-slate-800 hover:outline hover:bg-yellow-500 hover:outline-yellow-500 hover:outline-1  transition duration-500  flex  gap-2 justify-center items-center ease-out text-white w-[280px] py-2.5 ">
                                                {" "}
                                                <ShoppingCartOutlined classID="add mr-2" />  Add to cart
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
                                </div> <Skeleton />
                            </div>


                        })}


                    </div>

                ) : 'Loading'}



            </div>

            <Footer />
        </>

    )
}






export default Shop
