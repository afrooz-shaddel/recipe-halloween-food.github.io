import { NavLink } from "react-router-dom"
import './nav.css'
import { AiOutlineSlack } from "react-icons/ai";
import { SiCreatereactapp } from "react-icons/si";
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState  , useContext} from "react";
import { FiAlignLeft } from "react-icons/fi";
import {contexData} from '../CreatContext2'
import { MdFoodBank} from "react-icons/md"
import { FaBars } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import {MdDarkMode} from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import {BiChevronDown} from "react-icons/bi";
import { IoCreate } from "react-icons/io5";
// import {IoFastFoodOutline} from 'react-icons/io'
import Search1 from "../pages/Search1";

import {IoReorderThree , IoCloseSharp , IoFastFoodOutline } from 'react-icons/io5'
export default function Nav1(){
 
    let[isOpen , setIsOpen]=useState(false)
let [showButton , setShowButton]=useState(false)
const {theme , setTheme , color2 ,setColor2 , show , setShow}=useContext(contexData);
const [showDark , setShowDark]=useState(false);

    return(<>
        <BiChevronDown className={show ?'BiChevronDown  ma ':'BiChevronDown md '}    onClick={()=>setShow(!show)} /> 
       
<nav   className='nav'  style={{backgroundColor:theme}} >
        {/* <div className="container"    > */}
            <div className="nav2"  >

            
            
                <Link to='/'  className="logoText">
                 
                        <div  className="foodLogo">
                        <img src="\gift\New folder\images__2_-removebg-preview (1).png" alt=""  />
                        
                        </div>
                        <h3>Food</h3>
                    
                   
                    
                   
                </Link>
                <div className={isOpen?'navMobile active':"navMobile"}>

                

                <Link onClick={()=>{
                    setIsOpen(false)
                }}   className="linknav"  to="/gallery" >
                    <p>gallery</p>
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
         
          

         
             {/* <div data-aos="fade-left">
             <Link to="/search1"   className="searchBox"   >
        
             <BsFillSearchHeartFill  className="searchBox-icon"   />
         </Link>
         </div> */}
       
            
          </div>
              <Link to="/create"  className="createButton"   >
        
             
             <button> < AiOutlineSlack/> </button>
              </Link>
                <button  className="btnBar"  onClick={()=>setIsOpen(!isOpen)}>
 {isOpen? <AiOutlineClose  className="hambergurmenu "/>: <FiAlignLeft   className="hambergurmenu"  /> }    
                </button>
              {/* <FaBars className="hambergurmenu"   /> */}
               
              </div>
              </div>
         
            {/* </div> */}
   
       

        </nav>
        </>

    )
}


