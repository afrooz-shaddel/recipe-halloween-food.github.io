import React, { useEffect } from "react";
import { useState } from "react";
import { BsArrowUpCircle } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";
import './scroll.css'
import AOS from 'aos';
const ScrollToTop=()=>{
    const [showScroll , setShowScroll]=useState(false);
    useEffect(()=>{
        window.addEventListener("scroll" , ()=>{
            if(window.scrollY>0){
                setShowScroll(true)
            }else{
                setShowScroll(false) 
            }
        })
        AOS.init({  duration : 2000});
       
    },[])

const scrollTop=()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}

return(
<>
    
    { showScroll && <div  className="btnScroll"   data-aos="fade-up" onClick={scrollTop} >  <IoIosArrowUp   className="btnarrow"/> </div> }


    </>
)

}

export default ScrollToTop