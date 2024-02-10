
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow} from 'swiper/modules';

import './gallery.css';
import Header from '../component/Header/Header';
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard , Autoplay } from 'swiper/modules';
import { CiStar } from "react-icons/ci";

// import { useState } from 'react';
export default  function Gallery(){

  
  let img1=[{id:1,img: "/gallery/best-halloween-party-appetizers-1624627428.jpg" , name :"spooky"  ,rating:2.5},
  {id:2,img: "/gallery/p1bosrj8k15on1q3vj7p14r71786.jpg"  , name :"Vegan" ,rating:2.5}  
  ,{id:3,img: "/gallery/healthy_halloween_stuffedpeppers-cd538b9.jpg"  , name :"Shortbread" ,rating:2.5} ,
  {id:4,img: "/gallery/22.jpg"   , name :"floady" ,rating:2.5},
  ,{id:5,img: "/gallery/IMG_5089.jpg"  , name :"spine" ,rating:2.5}  , 
  {id:6,img: "/gallery/21.jpg"   , name :"Lunch Box" ,rating:2.5}  ,
  {id:7,img: "/gallery/images (58).jpg"   , name :" Scary halloween" ,rating:2.5} ,
   {id:8,img:"/gallery/24.jpg"  , name :"finger food" ,rating:2.5} , 
  ,{id:9,img: "/gallery/images (2).jpg"  , name :"Secretly" ,rating:2.5} ,
  {id:10,img: "/gallery/19.webp"   , name :"floa" ,rating:2.5},]

 
    return(
        <>
        <div id='tranding'>
           <div className='container1'>
               <Header  item="G A L l E R Y"/>
            </div>
                 
                <div className='container1'>
                  <Swiper
                    cssMode={true}
                    navigation={true}
                    mousewheel={true}
                    keyboard={true}
                    loop={true}
                    centeredSlides={true}
                    effect='coverflow'
                    data-swiper-autoplay="2000"
                    coverflowEffect={{
                    rotate:0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1.5,
                    slideShadows:true }}
                    pagination={{
                     clickable: true,
                    }}
                    grabCursor={true}
                    slidesPerView='auto'
                    modules={[Navigation,EffectCoverflow, Mousewheel, Keyboard ,Pagination , Autoplay]}
                    className="mySwiper  tranding-slider" >
                   
                       {img1.map(item=>(
                             <SwiperSlide key={item.id}  className='tranding-slide'>
                             <div className='tranding-slide-img'>
                                 <img src={item.img} alt="tranding" />
 
                             </div>
                             <div className='tranding-slide-content'>
            
                               <div className='tranding-slide-content-bottom'>
                                 <h2 className='food-name'>
                                 {item.name}
 
                                 </h2>
                                 <h3 className='food-rating'>
                                   <span>{item.rating}</span>
                                   <div className='rating'>
                                   <CiStar className='star'/>
                                   <CiStar className='star'/>
                                   <CiStar className='star'/>
                                   <CiStar className='star'/>
                                   <CiStar className='star'/>
                                      </div>
                                    </h3>
                                  </div>
                                </div>
                                </SwiperSlide>  ))}
      
                
          </Swiper>

  </div>             
   </div>              
       </>)}


