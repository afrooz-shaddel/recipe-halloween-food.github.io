
import './nav.css'

import { CiUser } from "react-icons/ci";
import { Link , useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState  , useContext} from "react";
import { FiAlignLeft } from "react-icons/fi";
import {contexData} from '../CreatContext2'
import { CiLight } from "react-icons/ci";
import {MdDarkMode} from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import {BiChevronDown} from "react-icons/bi";
import { BsChatSquareHeart } from "react-icons/bs";
export default function Nav1(){
 
    let[isOpen , setIsOpen]=useState(false)
let [showButton , setShowButton]=useState(false)
const {theme , setTheme , color2 ,setColor2 , show , setShow}=useContext(contexData);
const [showDark , setShowDark]=useState(false);
let [user1 , setUser1]=useState(false)
let navigate=useNavigate()
function cli1(){
   navigate("/register") 
}
    return(<>
        <BiChevronDown className={show ?'BiChevronDown  ma ':'BiChevronDown md '}    onClick={()=>setShow(!show)} /> 
       
<nav   className='nav'  style={{backgroundColor:theme}} >
       
            <div className="nav2"  >

            
            
                <Link to='/'  className="logoText">
                 
                      <img src="\logopng\result (2).png"  className="foodLogo" alt="" />
                    
                    
                   
                    
                   
                </Link>
                <div className='navdata'>

                

                <Link onClick={()=>{
                    setIsOpen(false)
                }}   className="linknav"  to="/create" >
                    <p>Create</p>
                </Link>
             


                <Link onClick={()=>{
                    setIsOpen(false)
                }} className="linknav" to='/search' >
                    <p>Recipes</p>
                </Link>

         




                <Link onClick={()=>{
                    setIsOpen(false)
                }} className="linknav" to="/about" >
                    <p>About</p>
                </Link>
                </div>


                <div className={isOpen?'navMobile active12':"navMobile"}>

                
                <Link onClick={()=>{
    setIsOpen(false)
}}   className="linknav "  to="/create" >
    <div>   <img src="\logopng\result (2).png"  className="foodLogo" alt="" /></div>
</Link>
<Link onClick={()=>{
    setIsOpen(false)
}}   className="linknav navb"  to="/create" >
    <p>Create</p>
</Link>



<Link onClick={()=>{
    setIsOpen(false)
}} className="linknav navb" to='/search' >
    <p>Recipes</p>
</Link>






<Link onClick={()=>{
    setIsOpen(false)
}} className="linknav navb" to="/about" >
    <p>About</p>
</Link>
</div>
            
       <div className="moonDark">
                 <div   className="searchlight" >
        
            <button   className="toggleBtn" onClick={()=>{theme=="light"?setTheme("dark")  :setTheme("light") }}>
                 {theme=="light" ?<MdDarkMode/> :<CiLight/>}
        
            </button>
         
          

         
           
       
            
          </div>
         
           
        
             
             <button className="createButton1" onClick={cli1}> < CiUser/>  </button>
               
               <button className="createButton1 between">
                <BsChatSquareHeart/>
               </button>





          </div>



              <button  className="btnBar"  onClick={()=>setIsOpen(!isOpen)}>
 {isOpen? <AiOutlineClose  className="hambergurmenu "/>: <FiAlignLeft   className="hambergurmenu"  /> }    
                </button>
              </div>
         
      
   
       

        </nav>
        </>

    )
}


