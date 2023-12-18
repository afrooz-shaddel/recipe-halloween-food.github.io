
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
  return (
    <>
      <Swiper
       pagination={true} 
       modules={[ Autoplay]} 
       autoplay={true}
       slidesPerView={5}
       spaceBetween={20}
      
       className="mySwiper myautoplay">
      
       
       
       
       
       
      <SwiperSlide><img className='autoplaypicture'  src="\remove\New folder (2)\there-is-glass-orange-juice-with-pumpkins-it-generative-ai_900396-38403.png" alt="" /></SwiperSlide>
    
      <SwiperSlide><img className='autoplaypicture'  src="\remove\New folder (2)\pizza-food-monster-graphic-illustration-260nw-1543141172.png" alt="" /></SwiperSlide>
      <SwiperSlide><img className='autoplaypicture'  src="\remove\New folder (2)\pngtree-pizza-with-olives-and-sausage-spider-for-halloween-party-png-image_10301020.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='autoplaypicture'  src="\remove\New folder (2)\106223985.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='autoplaypicture' src="\remove\360_F_635646268_68UfNglAzkljsJk5si30KF8geXVPzKEx.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='autoplaypicture' src="\remove\images (3).png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='autoplaypicture' src="\remove\images (4).png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='autoplaypicture' src="\remove\images (8).png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='autoplaypicture' src="\remove\images (9).png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='autoplaypicture' src="\remove\images (10).png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='autoplaypicture' src="\remove\there-is-cupcake-with-halloween-decoration-top-generative-ai_1034638-402.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='autoplaypicture'  src="\remove\New folder (2)\images (7).png" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}

  
  