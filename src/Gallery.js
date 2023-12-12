
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import "./gallery.css"
import { GoHeartFill } from "react-icons/go";
import { useState } from 'react';
export default  function Gallery(){

  let [like , setLike]=useState(false)

  function likeHandeler(){
    setLike(like =>!like)
  }
  let img1=["/gallery/1 (5).jpg ", "/gallery/1 (2).jpg" , "/gallery/Fright+Night+Scoop_3c97255e-4b86-4123-97d7-48916c48ff65-prv.jpg"  ,">gallery>Monster-Burgers-Recipe-Halloween-Food-Ideas-Easy-Halloween-Burgers-12-scaled.jpg" ,
"/gallery/download (3).jpg",
"/gallery/exps201865_UH153291A04_29_2b.jpg" ,
"/gallery/Halloween-pudding-cups_3.jpg",
"/gallery/images (3).jpg", 
"/gallery/images (4).jpg"]
    return(
        <>
        <div>
            <h2 className='galleryTitle'>Gallery</h2>
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      > 



          <h1>Flip through</h1>


        <SwiperSlide  style={{position:"relative"}}><img  className="swiper-img"src="\gallery\1 (2).jpg" alt="" />   </SwiperSlide>
        <SwiperSlide><img className="swiper-img" src="\gallery\1 (5).jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className="swiper-img" src="\gallery\Fright+Night+Scoop_3c97255e-4b86-4123-97d7-48916c48ff65-prv.jpg" /></SwiperSlide>
        <SwiperSlide><img className="swiper-img" src="\gallery\Monster-Burgers-Recipe-Halloween-Food-Ideas-Easy-Halloween-Burgers-12-scaled.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img  className="swiper-img"src="\gallery\download (3).jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img  className="swiper-img"src="\gallery\exps201865_UH153291A04_29_2b.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img  className="swiper-img"src="\gallery\Halloween-pudding-cups_3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img  className="swiper-img"src="\gallery\images (3).jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img  className="swiper-img"src="\gallery\images (4).jpg" alt="" /></SwiperSlide>
      
      </Swiper>
      </div>
    </>



    )

}