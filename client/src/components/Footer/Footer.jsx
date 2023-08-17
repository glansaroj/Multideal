import React from 'react'
import { TwitterOutlined, InstagramFilled , 
    FacebookFilled ,YoutubeFilled  ,
} from '@ant-design/icons';




function Footer() {
  return (
    <>

    <div className='flex justify-center items-center'>
    <hr className='mt-24 w-11/12  '/>
    </div>

           {/* <!-- FOOTER --> */}
    <footer  class="absolute flex flex-col md:flex-row gap-[40px] md:gap-[80px] md:justify-between md:items-center md:mt-2 pb-24 p-5  md:pb-24 md:px-16">
       
       
    <div className=' md:-pr-5'>                   
        <div class="text-2xl pt-5 text-slate-800 font-bold">MultiDeal</div>
        <p class="text-base leading-6 text-gray-500 md:text-md md:pr-36 mt-2">
        a multivendor E-commerce all in one online shopping platform where customers can buy various products from different vendors/shops. It's supposed to act as a central sales hub for shop owners/vendors in which they can easily showcase their products to their clients digitally & in a more convenient way.
        </p> 

        <div class="social text-slate-800 flex md:mt-9 gap-4  mt-6">
            <div class="h-8 w-8 bg-white cursor-pointer hover:bg-slate-800 transition duration-200 ease-in-out hover:text-white rounded-full shadow-md flex justify-center items-center"><TwitterOutlined /></div>
            
            <div class="h-8 w-8 bg-white cursor-pointer hover:bg-slate-800 transition duration-200 ease-in-out hover:text-white rounded-full shadow-sm  flex justify-center items-center"><InstagramFilled /></div>

            <div class="h-8 w-8 bg-white cursor-pointer hover:bg-slate-800 transition duration-200 ease-in-out hover:text-white rounded-full shadow-md  flex justify-center items-center"><FacebookFilled /></div>

            <div class="h-8 w-8 bg-white cursor-pointer hover:bg-slate-800 transition duration-200 ease-in-out hover:text-white rounded-full shadow-md  flex justify-center items-center"><YoutubeFilled /></div>
        </div>         

    </div>     


        <div class="flex gap-28  md:gap-5   md:mr-0">
            <div  class="text-slate-800 flex flex-col  md:w-[180px] gap-4">
                <h3 class="text-xl">Features</h3>
                <a class="text-sm cursor-pointer hover:border-b" href="">About us</a>
                <a class="text-sm cursor-pointer hover:border-b" href="#">Term & conditions</a>
                <a class="text-sm cursor-pointer hover:border-b" href="#">Best product</a>
                {/* <a class="text-sm cursor-pointer hover:border-b" href="#">How it work</a> */}
            </div>


            <div  class="text-slate-800 flex flex-col   md:w-[180px] gap-4">
                <h3 class="text-xl">Company</h3>
                <a class="text-sm cursor-pointer hover:border-b" href="">Privacy Policy</a>
                <a class="text-sm cursor-pointer hover:border-b" href="#">Term</a>
                {/* <a class="text-sm cursor-pointer hover:border-b" href="#">About</a> */}
                <a class="text-sm cursor-pointer hover:border-b" href="#">How it work</a>
            </div>

            <div  class="text-slate-800 flex   md:w-[180px] gap-4 mr-0 flex-col ">
                <h3 class="text-xl">General Links</h3>
                <a class="text-sm cursor-pointer  hover:border-b" href="#">Blogs</a>
                <a class="text-sm cursor-pointer hover:border-b" href="#">Tracking order</a>
                <a class="text-sm cursor-pointer  hover:border-b" href="#">Become a seller</a>

               
            </div>
            
        </div>


    </footer>
    </>
  )
}

export default Footer