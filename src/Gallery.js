
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow} from 'swiper/modules';

import './gallery.css';
import Header from './Header/Header';
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { CiStar } from "react-icons/ci";
// import { useState } from 'react';
export default  function Gallery(){

  
  let img1=[{id:1,img: "/gallery/1 (5).jpg " , name :"m"  ,rating:2.5},{id:2,img: "/gallery/1 (2).jpg"  , name :"m" ,rating:2.5}  , {id:3,img: "/gallery/Fright+Night+Scoop_3c97255e-4b86-4123-97d7-48916c48ff65-prv.jpg"  , name :"m" ,rating:2.5}   ,{id:4,img: "public\gallery\Monster-Burgers-Recipe-Halloween-Food-Ideas-Easy-Halloween-Burgers-12-scaled.jpg"  , name :"m" ,rating:2.5} ,
          {id:5,img: "/gallery/download (3).jpg"  , name :"m" ,rating:2.5} ,
    {id:6,img: "/gallery/exps201865_UH153291A04_29_2b.jpg"   , name :"m" ,rating:2.5}  ,
    {id:7,img: "/gallery/Halloween-pudding-cups_3.jpg"   , name :"m" ,rating:2.5} ,
    {id:8,img:"/gallery/images (3).jpg"  , name :"m" ,rating:2.5} , 
    {id:9,img: "/gallery/images (4).jpg"   , name :"m" ,rating:2.5} ]

 
    return(
        <>
        <div id='tranding'>
<div className='container1'>
  {/* <h2 className='text-center section-subheading'>Gallery</h2> */}
  <Header  item="G A L l E R Y"/>
  
  </div>
          
                 
                 
                 <div className='container1'>
                 <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        centeredSlides={true}
        effect={'coverflow'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        grabCursor={true}
        slidesPerView={'auto'}
       
        
       
        
       
        
        modules={[Navigation,EffectCoverflow, Mousewheel, Keyboard]}
        className="mySwiper  tranding-slider"
      >
      
         <SwiperSlide className='tranding-slide'>
          <div className='tranding-slide-img'>
              <img src="\gallery\5.jpg" alt="tranding" />

          </div>
          <div className='tranding-slide-content'>
           
            <div className='tranding-slide-content-bottom'>
              <h2 className='food-name'>
              spooky

              </h2>
              <h3 className='food-rating'>
                <span>2.5</span>
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

          </SwiperSlide>

          <SwiperSlide  className='tranding-slide'>
          <div className='tranding-slide-img'>
              <img src="\gallery\IMG_5089.jpg" alt="tranding" />

          </div>
          <div className='tranding-slide-content'>
           
            <div className='tranding-slide-content-bottom'>
              <h2 className='food-name'>
             spine

              </h2>
              <h3 className='food-rating'>
                <span>2.5</span>
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

          </SwiperSlide>

          <SwiperSlide className='tranding-slide'>
          <div className='tranding-slide-img'>
              <img src="\gallery\images (4).jpg" alt="tranding" />

          </div>
          <div className='tranding-slide-content'>
           
            <div className='tranding-slide-content-bottom'>
              <h2 className='food-name'>
              Vegan

              </h2>
              <h3 className='food-rating'>
                <span>2.5</span>
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

          </SwiperSlide>

          <SwiperSlide  className='tranding-slide'>
          <div className='tranding-slide-img'>
              <img src="\gallery\images (3).jpg" alt="tranding" />

          </div>
          <div className='tranding-slide-content'>
           
            <div className='tranding-slide-content-bottom'>
              <h2 className='food-name'>
              Secretly

              </h2>
              <h3 className='food-rating'>
                <span>2.5</span>
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

          </SwiperSlide>

          <SwiperSlide  className='tranding-slide'>
          <div className='tranding-slide-img'>
              <img src="\gallery\Halloween-pudding-cups_3.jpg" alt="tranding" />

          </div>
          <div className='tranding-slide-content'>
           
            <div className='tranding-slide-content-bottom'>
              <h2 className='food-name'>
             Shortbread

              </h2>
              <h3 className='food-rating'>
                <span>2.5</span>
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

          </SwiperSlide>

          <SwiperSlide  className='tranding-slide'>
          <div className='tranding-slide-img'>
              <img src="\gallery\Peanut-Butter-Rice-Krispie-Treat-Pumpkins-Recipe-4.jpg" alt="tranding" />

          </div>
          <div className='tranding-slide-content'>
           
            <div className='tranding-slide-content-bottom'>
              <h2 className='food-name'>
             Lunch Box

              </h2>
              <h3 className='food-rating'>
                <span>2.5</span>
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

          </SwiperSlide>

          <SwiperSlide  className='tranding-slide'>
          <div className='tranding-slide-img'>
              <img src="\gallery\download (3).jpg" alt="tranding" />

          </div>
          <div className='tranding-slide-content'>
           
            <div className='tranding-slide-content-bottom'>
              <h2 className='food-name'>
              Spooky

              </h2>
              <h3 className='food-rating'>
                <span>2.5</span>
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

          </SwiperSlide>

          <SwiperSlide  className='tranding-slide'>
          <div className='tranding-slide-img'>
              <img src="\gallery\images (2).jpg" alt="tranding" />

          </div>
          <div className='tranding-slide-content'>
           
            <div className='tranding-slide-content-bottom'>
              <h2 className='food-name'>
             Finger food

              </h2>
              <h3 className='food-rating'>
                <span>2.5</span>
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

          </SwiperSlide>

          <SwiperSlide  className='tranding-slide'>
          <div className='tranding-slide-img'>
              <img src="\gallery\Fright+Night+Scoop_3c97255e-4b86-4123-97d7-48916c48ff65-prv.jpg" alt="tranding" />

          </div>
          <div className='tranding-slide-content'>
           
            <div className='tranding-slide-content-bottom'>
              <h2 className='food-name'>
              Scary halloween

              </h2>
              <h3 className='food-rating'>
                <span>2.5</span>
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

          </SwiperSlide>
      
                  {/* <div className='tranding-slider-control'>
                    <div className="swiper-button-prev slider-arrow">
                    <FaArrowLeftLong/> 
                    </div>

                    <div className="swiper-button-next slider-arrow">
                    <FaArrowRight/> 
                    </div>
                  </div> */}
          </Swiper>

  </div>

                 
                 
   </div>              
                 
                 
                 
                 
                 
                 
                 
                 
       
    </>



    )

}


