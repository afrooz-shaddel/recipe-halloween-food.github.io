
  import {  Autoplay } from 'swiper/modules';
  // install Swiper modules
//   SwiperCore.use([Autoplay,Pagination,Navigation]);

import React, { useRef, useState } from 'react';
// Import Swiper React components


// Import Swiper styles
import 'swiper/css';

import 'swiper/css/autoplay';
import './AutoPlay.css';

// import required modules

import { Swiper, SwiperSlide } from 'swiper/react';
export default function AutoPlay() {
  let img=[
   
  "/remove/images (4).png",
  "/remove/images (8).png",
  "/remove/images (9).png",
  "/remove/New folder (2)/images (7).png",
"/remove/New folder (2)/there-is-glass-orange-juice-with-pumpkins-it-generative-ai_900396-38403.png" ,
"/remove/images (3).png",
,"/remove/New folder (2)/pngtree-pizza-with-olives-and-sausage-spider-for-halloween-party-png-image_10301020.png"
,"/remove/New folder (2)/106223985.png"
]
  return (
    <>
      <Swiper
       pagination={true} 
       modules={[ Autoplay]} 
       
       slidesPerView={5}
       spaceBetween={20}
       autoplay={{ delay: 3000, disableOnInteraction: false }}
    
     
       data-swiper-autoplay="2000"

       breakpoints={{
        900:{
          slidesPerView:5,
          spaceBetween:20
        },
        800:{
          slidesPerView:4,
          spaceBetween:10
        },
        600:{
          slidesPerView:3,
          spaceBetween:10
        },
        400:{
          slidesPerView:2,
          spaceBetween:10
        },
        300:{
          slidesPerView:1,
          spaceBetween:8
        }
       }}
      
       className="mySwiper myautoplay">
      
       
       
       {img.map((item , index)=>(
        <SwiperSlide key={index}><img className='autoplaypicture'  src={item} alt="" /></SwiperSlide> 
       ))}
       
       
   
    
    
      </Swiper>
    </>
  );
}

  
  