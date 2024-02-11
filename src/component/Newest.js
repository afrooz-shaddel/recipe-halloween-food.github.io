import './newest.css';
import { useState , useEffect } from 'react';
import NewProduct from './NewProduct';
import { useFetch } from "../hook/useFetch";
import {  Autoplay } from 'swiper/modules';

import 'swiper/css';

import 'swiper/css/autoplay';
import Header from './Header/Header';


import { Swiper, SwiperSlide } from 'swiper/react';
export default function Newest(){
    const {data ,  isLoading , error}=useFetch('https://recipefood-json-server.liara.run/recipes')
    const[recipie , setRecipie]=useState("")

let newData=[...data];
console.log(newData.reverse().splice(0,1))
   
    
    return(
   <div>
      <Header  item="N E W R E C I P E"/>
     <Swiper
    pagination={true} 
    modules={[ Autoplay]} 
    
    slidesPerView={4}
    // spaceBetween={10}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    data-swiper-autoplay="2000"
    
    breakpoints={{

        1100:{
            slidesPerView:3,
            spaceBetween:20
          },
        900:{
          slidesPerView:2,
          spaceBetween:20
        },
        800:{
          slidesPerView:2,
          spaceBetween:10
        },
        600:{
          slidesPerView:1,
          spaceBetween:10
        },
        400:{
          slidesPerView:1,
          spaceBetween:10
        },
        300:{
          slidesPerView:1,
          spaceBetween:8
        }
       }}
    
    
    
    
    
    
    
    
    
    
    
    >
   
    
   {newData.map(item=>
    
    
    
    
    
    <SwiperSlide > <NewProduct product={item}/>       </SwiperSlide> )}
   
        
        
   </Swiper>


  
 
   </div>
    )
}



