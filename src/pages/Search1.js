import { useEffect, useState , useRef } from "react";
import ScrollToTop from '../component/ScrollToTop'
import './search.css'
import {useFetch}  from '../hook/useFetch'
import { BsFillSearchHeartFill} from "react-icons/bs";

import { useNavigate } from "react-router-dom";
import NewProduct1 from "../component/NewProduct1";
import { BiChevronDown } from "react-icons/bi";
// import NotFound from "./NotFound";
import Nomatch from '../component/Nomatch'
import AOS from "aos";
// import HeaderType1 from "../HeaderType/HeaderType";
export default function Search1(){
  
const[filter1 ,setFilter1]=useState([])
const[alert ,setAlert]=useState("")
// const [found , setFound]=useState(false)
const[recipie , setRecipie]=useState("")

// const {data}=useFetch('https://recipefood-json-server.liara.run/recipes')
const {data}=useFetch('https://jsonploy-afroozs-projects.vercel.app/')
let elemenRef=useRef(null)

 
useEffect(()=>{ 
  setRecipie(data) 
  
  if(elemenRef.current.value==="" ){
        setFilter1(recipie)   
        console.log(recipie)
    }

},[data])
useEffect(() => {
  AOS.init({  duration : 2000});
}, [])

function changeHandeler(e){
  let newSearch=e.target.value
    const newFilter=recipie.filter((item)=>item.title.toLowerCase().includes(newSearch.toLowerCase()))
    console.log(newFilter)
    console.log(filter1)
    const newFilter2=data.some((item)=>item.title.toLowerCase().includes(newSearch.toLowerCase()))
 

 if(newFilter.length===0){
setFilter1([])
  
  }
else{
    setFilter1(newFilter )
    
}}
let navigate=useNavigate()


    return(
        <>


    
        <div  className="search12">
            <div className="arrowClose"  onClick={()=>navigate("/")}>
            <BiChevronDown />
            </div>
        
            <ScrollToTop/>

  
        <div  className="search">

      
        <BsFillSearchHeartFill  className="search-bs" />
                <input type="text"
                  ref={elemenRef} 
                 onChange={changeHandeler}  
                 placeholder="Search" 
                 onKeyDown={changeHandeler}  
                 className="searchInput" />
                </div>
           
                {/* {found && <Nomatch/>} */}
                {  filter1.length>0 &&<NewProduct1  product={filter1}/>  }
              
             {filter1.length===0 && <Nomatch/>}
                </div>
                
             
                
                
                
                
                </>)}
               