import Image from "next/image";
import React from "react";
import books from "src/assets/books.png";
import phone from "src/assets/phone.png";
import health from "src/assets/health.png";
import electro from "src/assets/electro.png";
import computers from "src/assets/computers.png";
import kitchen from "src/assets/kaitchen.png";
import cloth from "src/assets/cloth.png";
import sport from "src/assets/sports.png";

const Catagories = () => {
  return (
    <>
    
      <h1 className="text-2xl font-bold text-center justify-items-start mt-10 text-slate-800  ml-4">
        {" "}
        Top Shopping Catagories
      </h1>
      {/* </div> */}

      <div className="grid grid-cols-5 gap-6 place-items-center justify-evenly px-12   mt-10">
        <div className="h-[250px] border cursor-pointer border-slate-600 hover:border-2  bg-lime-200  flex flex-col  items-center px-5 justify-center w-[230px] rounded-lg  ">
          <Image src={electro} width={250} height={250} />

          <h1 className="text-xl -mt-4 font-semibold text-slate-800 ">
            Electronic
          </h1>
        </div>

        <div className="h-[250px] border cursor-pointer hover:border-2 border-slate-600 bg-teal-200 hover:shadow-  flex flex-col  items-center px-5 justify-center w-[230px] rounded-lg  ">
          <Image src={kitchen} width={200} height={200} />

          <h1 className="text-xl font-semibold text-slate-800">
            Home & Kitchen
          </h1>
        </div>

        <div className="h-[250px] border cursor-pointer border-slate-600 hover:border-2 bg-red-200 hover:shadow-sm  flex flex-col  items-center px-5 justify-center w-[230px] rounded-lg  ">
          <Image src={cloth} width={200} height={200} />

          <h1 className="text-xl font-semibold text-slate-800">Clothing</h1>
        </div>

   
        <div className="h-[250px] border cursor-pointer border-slate-600 hover:border-2 bg-blue-100 hover:shadow-sm  flex flex-col  items-center px-5 justify-center w-[230px] rounded-lg  ">
          <Image src={computers} width={200} height={200} />

          <h1 className="text-xl font-semibold text-slate-800">Computers</h1>
        </div>

        <div className="h-[250px] border cursor-pointer border-slate-600 bg-violet-200 hover:border-2 hover:shadow-sm flex flex-col  items-center px-5 justify-center w-[230px] rounded-lg  ">
          <Image src={books} width={250} height={250} />

          <h1 className="text-xl -mt-4 font-semibold text-slate-800">
            Books & Stationery
          </h1>
        </div>

        <div className="h-[250px] border cursor-pointer border-slate-600 bg-green-200 hover:border-2 hover:shadow-sm flex flex-col  items-center px-5 justify-center w-[230px] rounded-lg  ">
          <Image src={health} width={200} height={200} />

          <h1 className="text-xl  -mt-4 font-semibold text-slate-800">
            Health & Beauty
          </h1>
        </div>

        <div className="h-[250px] border cursor-pointer border-slate-600  bg-amber-100 hover:border-2 hover:shadow-sm  flex flex-col  items-center px-5 justify-center w-[230px] rounded-lg  ">
          <Image src={sport} width={200} height={200} />

          <h1 className="text-xl font-semibold text-slate-800">
            Sports & Outdoor
          </h1>
        </div>

        <div className="h-[250px] border cursor-pointer border-slate-600 bg-sky-200 hover:border-2 hover:shadow-sm  flex flex-col  items-center px-5 justify-center w-[230px] rounded-lg  ">
          <Image src={phone} width={200} height={200} />

          <h1 className="text-xl -mt-4 font-semibold text-slate-800">
            Phone & Accesories
          </h1>
        </div>

        {/* <div className="h-[250px] border border-slate-600 hover:border-yellow-500  flex flex-col  items-center px-5 justify-center w-[230px] rounded-lg  ">
        <Image src={"/Electro.png"} width={70} height={70} />

        <h1 className="text-xl font-semibold text-slate-800">Clothing</h1>
      </div> */}
      </div>
    </>
  );
};

export default Catagories;
