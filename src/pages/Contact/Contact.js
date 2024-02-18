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

let [name , setName]=useState("")
let [email , setEmail]=useState("")
let [phone , setPhone]=useState("")
let [massage , setMassage]=useState("")

function submitContact(e){
 e.preventDefault();

 setTimeout(()=>{
reset()


 },4000)
}


function reset(){
  setName("");
setEmail("")
setPhone("")
setMassage("")
}
    return(


        <>
      <div className='MassageWrapper'>
        <div className='MassageContent'>
        <h3>Massage to   <span>Recipe Food</span></h3>
            <form action="" >
                
              <div className='formMassageRight'>
                <input type="text"  placeholder='Name' value={name} onChange={(e)=> setName(e.target.value)} />
                <input type="number"  placeholder='Phone' value={phone} onChange={(e)=> setPhone(e.target.value)} />
                <input type="email" placeholder='Email' value={email}onChange={(e)=> setEmail(e.target.value)} />
                   
              </div>
               <div className='formMassageLeft'>
               <textarea name="postContent" placeholder='Massage' value={massage} onChange={(e)=> setMassage(e.target.value)} />
               <button type='submit' onClick={submitContact}  >send</button>

               </div>



            </form>

        </div>
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
            {/* <p  className='copyright'>Copyright@2023</p> */}
       
        </div>
        </div>
        </>
    )
}

