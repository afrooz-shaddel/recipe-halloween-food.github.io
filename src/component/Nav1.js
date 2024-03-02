import { NavLink } from "react-router-dom"
import './nav.css'
import { AiOutlineSlack } from "react-icons/ai";
import { SiCreatereactapp } from "react-icons/si";
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState  , useContext} from "react";
import { FiAlignLeft } from "react-icons/fi";
import {contexData} from '../CreatContext2'
import { MdFoodBank} from "react-icons/md"
import { FaBars } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import {MdDarkMode} from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import {BiChevronDown} from "react-icons/bi";
import { IoCreate } from "react-icons/io5";
import Register from "../pages/Register";
import Otp from "../pages/Otp";
// import {IoFastFoodOutline} from 'react-icons/io'
import Search1 from "../pages/Search1";

import {IoReorderThree , IoCloseSharp , IoFastFoodOutline } from 'react-icons/io5'
export default function Nav1(){
 
    let[isOpen , setIsOpen]=useState(false)
let [showButton , setShowButton]=useState(false)
const {theme , setTheme , color2 ,setColor2 , show , setShow}=useContext(contexData);
const [showDark , setShowDark]=useState(false);
let [user1 , setUser1]=useState(false)
function cli1(){
    setUser1(true)
}
    return(<>
        <BiChevronDown className={show ?'BiChevronDown  ma ':'BiChevronDown md '}    onClick={()=>setShow(!show)} /> 
       
<nav   className='nav'  style={{backgroundColor:theme}} >
        {/* <div className="container"    > */}
            <div className="nav2"  >

            
            
                <Link to='/'  className="logoText">
                 
                      <img src="\logopng\result (2).png"  className="foodLogo" alt="" />
                        {/* <h3>Recipes Food</h3> */}
                    
                   
                    
                   
                </Link>
                <div className={isOpen?'navMobile active':"navMobile"}>

                

                <Link onClick={()=>{
                    setIsOpen(false)
                }}   className="linknav"  to="/create" >
                    <p>Create</p>
                </Link>
                {/* <Link onClick={()=>{
                    setIsOpen(false)
                }} className="linknav" to="/allrecipes" >
                    <p>Recipes</p>
                </Link> */}



                <Link onClick={()=>{
                    setIsOpen(false)
                }} className="linknav" to='/search' >
                    <p>Recipes</p>
                </Link>

                {/* <Route path='/search'   element={<Searchend/>}/> */}




                <Link onClick={()=>{
                    setIsOpen(false)
                }} className="linknav" to="/about" >
                    <p>About</p>
                </Link>
                </div>
            
       <div className="moonDark">
                 <div   className="searchlight" >
        
            <button   className="toggleBtn" onClick={()=>{theme=="light"?setTheme("dark")  :setTheme("light") }}>
                 {theme=="light" ?<MdDarkMode/> :<CiLight/>}
        
            </button>
         
          

         
           
       
            
          </div>
         
              {/* <Link to="/register"  className="createButton"   > */}
        
             
             <button className="createButton1" onClick={()=>setUser1(true)}> < CiUser/>  </button>
               
                {user1 && <Otp />}





          </div>



              <button  className="btnBar"  onClick={()=>setIsOpen(!isOpen)}>
 {isOpen? <AiOutlineClose  className="hambergurmenu "/>: <FiAlignLeft   className="hambergurmenu"  /> }    
                </button>
              </div>
         
            {/* </div> */}
   
       

        </nav>
        </>

    )
}


