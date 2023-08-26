import React from "react";
import { Carousel } from "antd";
import Image from "next/image";



const contentStyle = {
  height: "350px",
  color: "#fff",
  // lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

function Hero() {
  return (
    <>
      <div className="mt-0 ">
        {/* <div className='banner  w-full'>
      < Image  src='/Banner1.png' width={1500}  height={630} />

    </div> */}

        {/* CAROUSEL */}
        <Carousel autoplay>
          <div  className='banner  w-full'>
            <Image
              style={contentStyle}
              src={"/Banner1.png"}
              width={1500}
              height={630}
            />
          </div>
          <div  className='banner  w-full'>
            <Image
              style={contentStyle}
              src={"/Banner2.png"}
              width={1500}
              height={630}
            />
          </div>
          <div  className='banner  w-full'>
            <Image
              style={contentStyle}
              src={"/Banner1.png"}
              width={1500}
              height={630}
            />
          </div>
          <div>
            <Image
              style={contentStyle}
              src={`/Banner2.png`}
              width={1500}
              height={630}
            />
          </div>
          <div>
            <Image
              style={contentStyle}
              src={"/Banner3.png"}
              width={1500}
              height={630}
            />
          </div>
          <div>
            <Image
              style={contentStyle}
              src={"/Banner4.png"}
              width={1500}
              height={630}
            />
          </div>

          <div>
            <Image
              style={contentStyle}
              src={"/Banner5.png"}
              width={1500}
              height={630}
            />
          </div>

          <div>
            <Image
              style={contentStyle}
              src={"/Banner6.png"}
              width={1500}
              height={630}
            />
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default Hero;
