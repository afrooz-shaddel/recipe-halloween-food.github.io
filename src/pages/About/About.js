import './About.css'
import Header from '../../component/Header/Header'

import { useEffect } from 'react';
import AOS from 'aos';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import {  Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { LuUser2 } from "react-icons/lu";


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Counter from '../../component/Counter/Counter';

export default function About(){
  let chef=[{id:1 , title: "Gorden Ramsay" , img:"/chef2/c1.jpg"},
  {id:2 , title:  "Aarti Sequeira", img:"/chef2/c2.jpg"},
  {id:3 , title: "Anjum Anand" , img:"/chef2/c3.jpg"},
  {id:4 , title: "Samia Ahad " , img:"/chef2/c4.jpg"},
  {id:5, title:  "Connie Achurra", img:"/chef2/c5.jpg"},
]
  
    useEffect(() => {
        AOS.init({  duration : 2000});
      }, [])
    
    return(
        <div id='about'>
           <Header item="A B O U T U S"/>
           

           <div className='aboutWrapper'>
           
            <div className='about'>
            <div className='about-top'>
                <div className='about-picture   ' data-aos="fade-up"  data-aos-duration="3000"><img src="\gift\[removal.ai]_a267accc-b9dd-496b-a31b-b06428a46897-young-beautiful-female-chef-portrait-in-kitchen-bt0m92.png" alt="" /> </div>
                <div className='backgroundblack'>
                   <img  src="\about\Frame-402077.jpg" alt="" />
                   <div className='clockWrapper'>
                    <div className='clockfirst'>
                    <div className='clock'></div>
                    <div className='clockfirst-text'>
                    <p className='clock-number'><Counter number={550} /></p>
                    <span className='clock-text'>Recipe</span>
                    </div>
                    
                    </div>
                    
                    <div className='userfirst'>
                      <span><LuUser2/></span>
                      <div className='userfirst-text'>
                      <p className='clock-number'><Counter number={650} /></p>
                      <span className='clock-text'>user</span>
                      </div>
                      
                    </div>
                   </div>
                   
                   </div>
                </div>



                <div className='about-text margin' data-aos="fade-down"  data-aos-duration="3000"><p >It is the spooky time of the year again. At any time, a trick-or-treater can knock on the door; you can catch the pumpkin smells, and do not forget to be careful against the monster appearing on any corner because it is Halloween!

                Halloween first started as a Memorial held for the deceased and is believed to be created in Ireland. The holiday was called “All Hallow’s Eve,” which turned into Halloween later. It is now celebrated in the USA with children treat-or-tricking on the streets with various funny costumes, families and friends gathering up, playing games, and eating traditional Halloween foods</p></div>
            </div>
           


           {/* <div className='about about1'>
               
                <div className='about-text '  data-aos="fade-up"><p>It is the spooky time of the year again. At any time, a trick-or-treater can knock on the door; you can catch the pumpkin smells, and do not forget to be careful against the monster appearing on any corner because it is Halloween!

                 
                 Halloween first started as a Memorial held for the deceased and is believed to be created in Ireland. The holiday was called “All Hallow’s Eve,” which turned into Halloween later. It is now celebrated in the USA with children treat-or-tricking on the streets with various funny costumes, families and friends gathering up, playing games, and eating traditional Halloween foods</p></div>
          
          
                 <div className='about-picture margin' data-aos="fade-down"><img src="\about\images (51).jpg" alt="" /></div>
          
            </div> */}
            

           </div>

           {/* <div className='container' > */}
    
           <Swiper data-aos="fade-down"
        
        slidesPerView={4}
        spaceBetween={5}
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

        
          714: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
         1054: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          1100: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          1300: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
        }
      }

        modules={[Pagination ,  Autoplay]}
    
        
        className="mySwiper"
      >
       {chef.map(item=> <SwiperSlide><div className='cardintroduction'>
              <div className='imageintroduction' >
              <img src={item.img} alt="" />
              </div>
              <div className='text'>  <p className='nameintroduction'> {item.title}</p>
            
              <div className='starintroduction'>
                <ul className='starintroduction-list'>
                  <li className='starintroduction-item'> <FaYoutube/></li>
                  <li className='starintroduction-item'> <FaFacebookF/></li>
                  <li className='starintroduction-item'>  <CiInstagram/></li>
                </ul>
             


              </div></div>
            

           


            </div>
            </SwiperSlide>
         
            
            ) }
      
       
      </Swiper>
      {/* </div> */}

</div>



              

    
      

    )
}