import './contact.css'
import {contexData} from '../../CreatContext2';
import { useEffect, useRef, useState  , useContext} from "react";
import { Link } from 'react-router-dom';
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
// import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaGithub } from "react-icons/fa6";
import { toast } from "react-toastify";
import { MdPhoneInTalk } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
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
toast.success("success")

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
               <button type='submit' className='conectbtn' onClick={submitContact}  >send</button>

               </div>



            </form>

        </div>
        <div  className='contactwrapper' style={{backgroundColor:theme , display:"flex" }}  >
        

            <div className='logofooterside'>
            <ul className='logofooterside-item'>
              <li className='logofooterside-list'>09168672268<span><MdPhoneInTalk /></span></li>
              <li className='logofooterside-list'>Italy<span><IoLocationOutline/></span></li>
              <li className='logofooterside-list'>afrooz880@gmail.com<span> <MdOutlineMailOutline/></span></li>
            </ul>

            <ul className='logofooterside-item1'>
              <li className='logofooterside-li'><Link className='logofooterside-link' to="/about">About</Link></li>
              <li className='logofooterside-li'><Link className='logofooterside-link' to="/search'">Recipes</Link></li>
              <li className='logofooterside-li'><Link className='logofooterside-link' to="/create">create</Link></li>
            </ul>
            {/* <div className='footer-logo'><img  src="\logopng\result (2).png" alt="" /></div> */}

            </div>
       

       
        </div>
        </div>
        </>
    )
}

