import './contact.css'
import {contexData} from '../../CreatContext2';
import { useEffect, useRef, useState  , useContext} from "react";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaGithub } from "react-icons/fa6";
export default function Contact(){
    const {theme , setTheme , color2 ,setColor2 , show , setShow}=useContext(contexData);
console.log(theme)
    return(
        <>
        <div  className='contactwrapper' style={{backgroundColor:theme , display:"flex" }}  >
        <div className='tooltip-section'>
        
            <div className='tooltip-item'>
            <div className='tooltip-text'>09168672268</div>
            <span> 
           < FaPhone  className='tooltipIcon'/></span>

            </div>
            <div className='tooltip-item'>
            <div className='tooltip-text'>afrooz880@gmail.com</div>
            <span> <     MdOutlineMailOutline className='tooltipIcon'/></span>

            </div>
      
            <div className='tooltip-item'>
            <div className='tooltip-text'> github.com/afrooz-shaddel/</div>
            <span> <    
           FaGithub  className='tooltipIcon'/></span>

            </div>
          
            </div>
            <p  className='copyright'>Copyright@2023</p>
       
        </div>
        </>
    )
}

