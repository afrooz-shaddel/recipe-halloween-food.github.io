import './newest.css';
import { useState , useEffect } from 'react';
import NewProduct from './NewProduct';
import { useFetch } from "../hook/useFetch";
import {  Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import  {Link} from 'react-router-dom';


import 'swiper/css/autoplay';
import Header from './Header/Header';


import { Swiper, SwiperSlide } from 'swiper/react';
export default function Newest(){
    
    const {data ,  isLoading , error}=useFetch('http://localhost:3000/recipes')
   
    const[recipie , setRecipie]=useState("")
    let navigate=useNavigate()
let newData=[...data];

    
    return(
   <div>
      <Header  item="N E W R E C I P E"/>

      <div className='btnWrapperNew' >
     
      <p>...NewRecipes</p>
        <Link rel="stylesheet" to="/search" >
          
        <p className='btnNew' ><FaArrowLeft/> All Recipes </p>
</Link>
      </div>
     <Swiper
    pagination={true} 
    modules={[ Autoplay]} 
    
    slidesPerView={3}
    spaceBetween={5}
    autoplay={{ delay: 1500, disableOnInteraction: false }}
    data-swiper-autoplay="2000"
    
    breakpoints={{
      1300:{
        slidesPerView:3,
        spaceBetween:5
      },
        1100:{
            slidesPerView:2,
            spaceBetween:5
          },
        900:{
          slidesPerView:2,
          spaceBetween:5
        },
       850:{
          slidesPerView:1,
          spaceBetween:5
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
    
    
    
    
    
    <SwiperSlide key={item.id}> <NewProduct product={item}/>       </SwiperSlide> )}
   
        
        
   </Swiper>


  
 
   </div>
    )
}



