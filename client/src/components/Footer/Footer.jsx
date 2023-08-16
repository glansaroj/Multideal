import React from 'react'

function Footer() {
  return (
    <>

    <div className='flex justify-center'>
    <hr className='mt-20 w-11/12  '/>
    </div>

           {/* <!-- FOOTER --> */}
    <footer  class="absolute flex flex-col md:flex-row gap-[40px] md:gap-[140px]  md:mt-2 pb-24 p-5 md:px-16 md:pb-24 md:p-16">
       
       
    <div>                   
        <div class="text-2xl pt-5 text-slate-800 font-bold">MultiDeal</div>
        <p class="text-base leading-6 text-gray-500 md:text-md md:pr-36 mt-4">
        a multivendor E-commerce all in one online shopping platform where customers can buy various products from different vendors/shops. It's supposed to act as a central sales hub for shop owners/vendors in which they can easily showcase their products to their clients digitally & in a more convenient way.
        </p> 

        <div class="social text-slate-800 flex md:mt-9 gap-4 mt-6">
            <div class="h-8 w-8 bg-white rounded-full  flex justify-center items-center"><i class="fa-brands fa-twitter"></i></div>
            
            <div class="h-8 w-8 bg-white rounded-full  flex justify-center items-center"><i class="fa-brands fa-instagram"></i></div>

            <div class="h-8 w-8 bg-white rounded-full  flex justify-center items-center"><i class="fa-brands fa-google"></i></div>

            <div class="h-8 w-8 bg-white rounded-full  flex justify-center items-center"><i class="fa-brands fa-linkedin"></i></div>
        </div>         

    </div>     


        <div class="flex gap-28 mt-10 md:mr-0">
            <div  class="text-slate-800 flex flex-col gap-5">
                <h3 class="text-xl">Features</h3>
                <a class="text-sm cursor-pointer hover:border-b" href="">About us</a>
                <a class="text-sm cursor-pointer hover:border-b" href="#">Term & conditions</a>
                <a class="text-sm cursor-pointer hover:border-b" href="#">Best product</a>
                {/* <a class="text-sm cursor-pointer hover:border-b" href="#">How it work</a> */}
            </div>


            <div  class="text-slate-800 flex flex-col gap-4">
                <h3 class="text-xl">Company</h3>
                <a class="text-sm cursor-pointer hover:border-b" href="">Privacy Policy</a>
                <a class="text-sm cursor-pointer hover:border-b" href="#">Term</a>
                <a class="text-sm cursor-pointer hover:border-b" href="#">About</a>
                <a class="text-sm cursor-pointer hover:border-b" href="#">How it work</a>
            </div>

            <div  class="text-slate-800 flex mr-0 flex-col ">
                <h3 class="text-xl">General Links</h3>
                <a class="text-sm cursor-pointer mt-4 hover:border-b" href="#">Blogs</a>
                <a class="text-sm cursor-pointer mt-4 hover:border-b" href="#">Tracking order</a>
                <a class="text-sm cursor-pointer mt-4 hover:border-b" href="#">Become a seller</a>

               
            </div>
            
        </div>


    </footer>
    </>
  )
}

export default Footer