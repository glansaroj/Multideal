import Image from "next/image";
import React from "react";
import books from 'src/assets/books.png'
import phone from 'src/assets/phone.png'
import health from 'src/assets/health.png'
import electro from 'src/assets/electro.png'
import computer from 'src/assets/computer.png'

const Catagories = () => {
  return (
    <div className="flex flex-wrap px-12  justify-between gap-6 mt-20">
      <div className="h-[250px] border border-slate-600 hover:border-yellow-500 flex flex-col  items-center px-5 justify-center w-[230px] rounded-lg  ">
        <Image src={electro} width={250} height={250} />

        <h1 className="text-xl -mt-4 font-semibold text-slate-800">Electronic</h1>
      </div>


      <div className="h-[250px] border border-slate-600 hover:border-yellow-500  flex flex-col  items-center px-5 justify-center w-[230px] rounded-lg  ">
        <img src={computer} width={200} height={200} />

        <h1 className="text-xl -mt-4 font-semibold text-slate-800">Computers</h1>
      </div>

      <div className="h-[250px] border border-slate-600 hover:border-yellow-500  flex flex-col  items-center px-5 justify-center w-[230px] rounded-lg  ">
        <Image src={"/Electro.png"} width={70} height={70} />

        <h1 className="text-xl font-semibold text-slate-800">Home & Kitchen</h1>
      </div>

      <div className="h-[250px] border border-slate-600 hover:border-yellow-500  flex flex-col  items-center px-5 justify-center w-[230px] rounded-lg  ">
        <Image src={"/Electro.png"} width={70} height={70} />

        <h1 className="text-xl font-semibold text-slate-800">Clothing</h1>
      </div>

      <div className="h-[250px] border border-slate-600 hover:border-yellow-500  flex flex-col  items-center px-5 justify-center w-[230px] rounded-lg  ">
        <Image src={books} width={250} height={250} />

        <h1 className="text-xl -mt-4 font-semibold text-slate-800">Books & Stationery</h1>
      </div>


      <div className="h-[250px] border border-slate-600 hover:border-yellow-500  flex flex-col  items-center px-5 justify-center w-[230px] rounded-lg  ">
        <Image src={"/Electro.png"} width={70} height={70} />

        <h1 className="text-xl font-semibold text-slate-800">Garden & Kitchen</h1>
      </div>


      <div className="h-[250px] border border-slate-600 hover:border-yellow-500  flex flex-col  items-center px-5 justify-center w-[230px] rounded-lg  ">
        <Image src={health} width={200} height={200} />

        <h1 className="text-xl  -mt-4 font-semibold text-slate-800">Health & Beauty</h1>
      </div>

      <div className="h-[250px] border border-slate-600 hover:border-yellow-500  flex flex-col  items-center px-5 justify-center w-[230px] rounded-lg  ">
        <Image src={phone} width={200} height={200} />

        <h1 className="text-xl -mt-4 font-semibold text-slate-800">Phone & Accesories</h1>
      </div>

      <div className="h-[250px] border border-slate-600 hover:border-yellow-500  flex flex-col  items-center px-5 justify-center w-[230px] rounded-lg  ">
        <Image src={"/Electro.png"} width={70} height={70} />

        <h1 className="text-xl font-semibold text-slate-800">Clothing</h1>
      </div>





     


    </div>
  );
};

export default Catagories;
