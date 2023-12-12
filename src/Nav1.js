import { NavLink } from "react-router-dom"
import './nav.css'

import { Link } from 'react-router-dom'
import { useEffect, useRef, useState  , useContext} from "react";

import {contexData} from './CreatContext2'
import { MdFoodBank} from "react-icons/md"

import {BiChevronDown} from "react-icons/bi";
import { IoCreate } from "react-icons/io5";
// import {IoFastFoodOutline} from 'react-icons/io'
import Search1 from "./Search1";

import {IoReorderThree , IoCloseSharp , IoFastFoodOutline } from 'react-icons/io5'
export default function Nav1(){
 
    let[isOpen , setIsOpen]=useState(false)
let [showButton , setShowButton]=useState(false)
const {theme , setTheme , color2 ,setColor2 , show , setShow}=useContext(contexData);
 let refData=useRef(null)

 let refData3=useRef(null)
 const controlNavbar=()=>{
    if(window.scrollY>100){
        setIsOpen(false)
    }else{
        setIsOpen(true)
    }
 }
window.addEventListener("scroll" , controlNavbar)
//  useEffect(()=>{
//   window.addEventListener("scroll" , controlNavbar)
//   return()=>{
//     window.removeEventListener('scroll' , controlNavbar)
//   }

//  },[])
 

    return(<>
        <BiChevronDown className={show ?'BiChevronDown  ma ':'BiChevronDown md '}    onClick={()=>setShow(!show)} /> 
       
<nav   className='nav'  style={{backgroundColor:color2}} >
        <div className="container"    >
            <div className="nav2"  >

            
            
                <Link to='/'  className="logoText">
                 
                        <div  className="foodLogo">
                        <img src="\gift\download__1_-removebg-preview (1).png" alt=""  />
                        
                        </div>
                        <h3>Food</h3>
                    
                   
                    
                   
                </Link>

                <Link  to="/gallery" >
                    <p>gallery</p>
                </Link>
                <Link  to="/allrecipes" >
                    <p>Allrecipes</p>
                </Link>
     
            
       

              <Link to="/create"  className="createButton"   >
        
           
             <button>recipe</button>
              </Link>
              </div>
         
            </div>
   
       

        </nav>
        </>

    )
}


