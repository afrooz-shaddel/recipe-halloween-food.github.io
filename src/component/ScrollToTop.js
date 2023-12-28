import React, { useEffect } from "react";
import { useState } from "react";
import { BsArrowUpCircle } from "react-icons/bs";
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
<div  className="btn"   data-aos="fade-up">
    
    { showScroll && <BsArrowUpCircle onClick={scrollTop}  className="btnarrow"/>}</div> 



)

}

export default ScrollToTop