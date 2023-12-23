import './contact.css'
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaGithub } from "react-icons/fa6";
export default function Contact(){
    return(
        <>
        <div  className='contactwrapper' style={{display:"flex" , flexDirection:"column"}}>
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