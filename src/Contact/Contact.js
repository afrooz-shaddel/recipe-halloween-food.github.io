import './contact.css'
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { TiSocialFacebook } from "react-icons/ti";
import { FaGithub } from "react-icons/fa6";
export default function Contact(){
    return(
        
        <div className='tooltip-section'>
            <div className='tooltip-item'>
            <div className='tooltip-text'>instagram</div>
            <span> < CiInstagram className='tooltipIcon'/></span>

            </div>
            <div className='tooltip-item'>
            <div className='tooltip-text'>Youtube</div>
            <span> 
           < CiYoutube className='tooltipIcon'/></span>

            </div>
            <div className='tooltip-item'>
            <div className='tooltip-text'>Twitter</div>
            <span> <     CiTwitter className='tooltipIcon'/></span>

            </div>
            <div className='tooltip-item'>
            <div className='tooltip-text'>Facebook</div>
            <span> <    TiSocialFacebook className='tooltipIcon'/></span>

            </div>
            <div className='tooltip-item'>
            <div className='tooltip-text'> FaGithub</div>
            <span> <    
           FaGithub  className='tooltipIcon'/></span>

            </div>
          
         

        </div>
      
    )
}