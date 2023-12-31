import './About.css'
import Header from '../../component/Header/Header'

import { useEffect } from 'react';
import AOS from 'aos';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {  Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';



// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function About(){
  
    useEffect(() => {
        AOS.init({  duration : 2000});
      }, [])
    
    return(
        <div id='about'>
           <Header item="A B O U T U S"/>
           

           <div className='aboutWrapper'>
            <div className='about'>
                <div className='about-picture   ' data-aos="fade-up"  data-aos-duration="3000"><img src="\tinified (1)\manchester-grill.webp" alt="" /></div>
                <div className='about-text margin' data-aos="fade-down"  data-aos-duration="3000"><p >It is the spooky time of the year again. At any time, a trick-or-treater can knock on the door; you can catch the pumpkin smells, and do not forget to be careful against the monster appearing on any corner because it is Halloween!

                Halloween first started as a Memorial held for the deceased and is believed to be created in Ireland. The holiday was called “All Hallow’s Eve,” which turned into Halloween later. It is now celebrated in the USA with children treat-or-tricking on the streets with various funny costumes, families and friends gathering up, playing games, and eating traditional Halloween foods</p></div>
            </div>
           


           <div className='about about1'>
               
                <div className='about-text '  data-aos="fade-up"><p>It is the spooky time of the year again. At any time, a trick-or-treater can knock on the door; you can catch the pumpkin smells, and do not forget to be careful against the monster appearing on any corner because it is Halloween!

                 
                 Halloween first started as a Memorial held for the deceased and is believed to be created in Ireland. The holiday was called “All Hallow’s Eve,” which turned into Halloween later. It is now celebrated in the USA with children treat-or-tricking on the streets with various funny costumes, families and friends gathering up, playing games, and eating traditional Halloween foods</p></div>
          
          
                 <div className='about-picture margin' data-aos="fade-down"><img src="\tinified (1)\56993.jpg" alt="" /></div>
          
            </div>
            

           </div>


    
           <Swiper data-aos="fade-down"
           style={{paddingLeft:"20px" , paddingRight:"20px"}}
        slidesPerView={1}
        spaceBetween={30}
        data-swiper-autoplay="2000"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        centeredSlides= {true}
       centeredSlidesBounds= {true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        
          650: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
          1220: {
            slidesPerView: 4,
            spaceBetween: 60,
          },
        }}

        modules={[Pagination ,  Autoplay]}
    
        // autoplay={true}
        className="mySwiper"
      >
        <SwiperSlide><div className='cardintroduction'>
              <div className='imageintroduction'>
              <img src="\tinified (1)\download (3).jpg" alt="" />
              </div>
              <p className='nameintroduction'> Gorden Ramsay</p>
              <p className='nameintroduction'>chef of holloween food</p>
              <div className='starintroduction'>
              <FaStar /><FaStar /><FaStar />
              <FaRegStar/> <FaRegStar/>
              </div>

           


            </div></SwiperSlide>
        <SwiperSlide>
        <div className='cardintroduction'>
              <div className='imageintroduction'>
              <img src="\tinified (1)\download (56).jpg" alt="" />
              </div>
              <p className='nameintroduction'> Aarti Sequeira</p>
              <p className='nameintroduction'>chef of holloween food</p>
              <div className='starintroduction'>
              <FaStar /><FaStar /><FaStar />
              <FaRegStar/> <FaRegStar/>
              </div>

           


            </div>
        </SwiperSlide>
        <SwiperSlide><div className='cardintroduction'>
              <div className='imageintroduction'>
              <img src="\tinified (1)\cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zNF9waG90b19vZl9ibGFja193b21hbl9jaGVmX2Nvb2tpbmdfaW5fdGhlX2tpdF9jZmQwMWViNS1mOThlLTQzMTYtYWZlNC03MTZhNGM4ZjNkYmNfMS5qcGc-2.webp" alt="" />
              </div>
              <p className='nameintroduction'>  Amit Puri</p>
              <p className='nameintroduction'>chef of holloween food</p>
              <div className='starintroduction'>
              <FaStar /><FaStar /><FaStar />
              <FaRegStar/> <FaRegStar/>
              </div>

           


            </div></SwiperSlide>
        <SwiperSlide><div className='cardintroduction'>
              <div className='imageintroduction'>
              <img src="\tinified (1)\images (3).jpg" alt="" />
              </div>
              <p className='nameintroduction'> Anjum Anand</p>
              <p className='nameintroduction'>chef of holloween food</p>
              <div className='starintroduction'>
              <FaStar /><FaStar /><FaStar />
              <FaRegStar/> <FaRegStar/>
              </div>

           


            </div></SwiperSlide>
            <SwiperSlide><div className='cardintroduction'>
              <div className='imageintroduction'>
              <img src="\tinified (1)\images (4).jpg" alt="" />
              </div>
              <p className='nameintroduction'>Samia Ahad   </p>
              <p className='nameintroduction'>chef of holloween food</p>
              <div className='starintroduction'>
              <FaStar /><FaStar /><FaStar />
              <FaRegStar/> <FaRegStar/>
              </div>

           


            </div></SwiperSlide>

            <SwiperSlide><div className='cardintroduction'>
              <div className='imageintroduction'>
              <img src="\tinified (1)\3775416-1453273301-2.jpg" alt="" />
              </div>
              <p className='nameintroduction'> Connie Achurra</p>
              <p className='nameintroduction'>chef of holloween food</p>
              <div className='starintroduction'>
              <FaStar /><FaStar /><FaStar />
              <FaRegStar/> <FaRegStar/>
              </div>

           


            </div></SwiperSlide>
       
      </Swiper>


</div>



              

    
      

    )
}