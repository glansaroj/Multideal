
import React from 'react'
import Header from "@/components/Header/Header";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import { Space, Table, Tag } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishList} from '@/Redux/reducerSlice/products';



import Image from 'next/image';



const Wishlist = () => {
  const { wishList } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  


  return (
    <>
      <Header />
      <Navbar />

      <div className='w-full h-screen pb-52 flex flex-col px-12 items-center'>
        <h1 className='text-4xl font-bold text-slate-800 text-center mt-16'>My wishList</h1>
        {/* <div className='flex  flex-col items-center justify-center'>
          <Image className='mt-4' src={'/empty.png'} width={'400'} height={'400'} />

          <h3 className='text-lg -mt-5 text-slate-800 font-bold '>Your Wish list is empty</h3>

          <a className='bg-slate-800 px-7 hover:bg-yellow-500 text-white transition duration-300 font-semibold rounded-md shadow-md mt-5 py-3' href="">Go to Shop </a>



        </div> */}

        {/* TABLE */}
        <div >
        </div>


        <div class="flex flex-col w-full h-full mt-5">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div lass="overflow-hidden">
                <table class="min-w-full text-center text-sm font-light">
                  <thead
                    class="border-b bg-yellow-500 font-medium text-slate-800 dark:border-neutral-500 dark:bg-neutral-900">

                    <tr>
                      <th scope="col" class=" px-6 py-4">Image</th>
                      <th scope="col" class=" text-left px-6 py-4">Prodcut Name</th>
                      <th scope="col" class=" px-6 py-4">Unit Price</th>
                      <th scope="col" class=" px-6 py-4">Quantity</th>
                      <th scope="col" class=" px-6 py-4">Total Price</th>

                      <th scope="col" class=" px-6 py-4">Action</th>
                    </tr>

                  </thead>
                  <tbody>

                    {wishList.map((item) => {
                      return (
                        <>
                          <tr className='border'>
                            <td scope="col" class=" px-6 py-4">
                              <Image
                                src={"http://localhost:5000/product-img/" + item.ID}
                                width={80}
                                height={70}
                              // alt="(item.title)"
                              ></Image>

                            </td>
                            <td scope="col" class="text-md text-left text-slate-800 font-medium px-6 py-4">{item.title}</td>
                            <td scope="col" class=" px-6 py-4">Rs.{item.price}</td>
                            <td class="whitespace-nowrap  px-6 py-4 flex items-center justify-center">
                              <div className='px-0 w-[130px] font-semibold border text-lg '> <button className=' text-center mr-2 text-2xl'>-</button> <span className='border-l border-r px-4'> 1</span> <button className='py-1 ml-2 text-center'>+</button> </div>
                            </td>
                            <td scope="col" class=" px-6 py-4">Rs.{item.price}</td>

                            {/* <th scope="col" class=" px-6 py-4">Action</th> */}
                            <td class="whitespace-nowrap  px-6 py-4"><button onClick={() => {
                              dispatch(removeFromWishList(item));
                            }} className='border font-semibold rounded-md text-red-500 hover:bg-red-500 hover:text-white border-red-500 px-4 py-1.5'>Remove</button>  </td>

                          </tr>
                        </>
                      )
                    })}



                    {/* TABLE FORMAT IF FOR REF. ------- */}
                    {/* <tr class="border-b dark:border-neutral-500 h-10">
                      <td class="whitespace-nowrap  px-6 py-4 font-medium">Image</td>
                      <td class="whitespace-nowrap  px-6 py-4">Hawkins Cooker</td>
                      <td class="whitespace-nowrap  px-6 py-4">Rs.5000 /-</td>
                      <td class="whitespace-nowrap  px-6 py-4 flex justify-center">
                        <div className='px-0 w-[130px] font-semibold border text-lg '> <button className=' text-center mr-2 text-2xl'>-</button> <span className='border-l border-r px-4'> 1</span> <button className='py-1 ml-2 text-center'>+</button> </div>
                      </td>
                      <td class="whitespace-nowrap  px-6 py-4">Rs.5000 /-</td>
                      <td class="whitespace-nowrap  px-6 py-4"><button className='border font-semibold rounded-md text-red-500 hover:bg-red-500 hover:text-white border-red-500 px-4 py-1.5'>Remove</button>  </td>

                    </tr> */}


                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>


      </div>


      <Footer />
    </>

  )
}

export default Wishlist