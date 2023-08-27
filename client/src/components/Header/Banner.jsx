
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import '../../styles/gloabls.css';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import Image from "next/image";
import Banner1 from "../../assets/Banner/Banner1.png";
import Banner2 from "../../assets/Banner/Banner2.png";
import Banner3 from "../../assets/Banner/Banner3.png";
import Banner4 from "../../assets/Banner/Banner4.png";
import Banner5 from "../../assets/Banner/Banner5.png";
import Banner6 from "../../assets/Banner/Banner6.png";





function Banner() {
  return (
    <>
      {/* <div className="mt-0 "> */}
        {/* <div className='banner  w-full'>
      < Image  src='/Banner1.png' width={1500}  height={630} />

    </div> */}

        {/* CAROUSEL */}
        
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='h-[700px]'>  <Image  src='/Banner1.png' width={1500}  height={630} /> 
        </SwiperSlide>
        <SwiperSlide>
        <Image  src={Banner2} width={1500}  height={630} /> 
        </SwiperSlide>
        <SwiperSlide>
        <Image  src={Banner3} width={1500}  height={630} /> 
        </SwiperSlide>
        <SwiperSlide>
        <Image  src={Banner4} width={1500}  height={630} /> 
        </SwiperSlide>
        <SwiperSlide>
        <Image  src={Banner5} width={1500}  height={630} /> 
        </SwiperSlide>
        <SwiperSlide>
        <Image  src={Banner6}width={1500}  height={630} /> 
        </SwiperSlide>
        
      </Swiper>
  

      
    
     
    </>
  );
}

export default Banner;




