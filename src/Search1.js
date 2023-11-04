import { useEffect, useState , useRef } from "react";
import ScrollToTop from './ScrollToTop'
import './search.css'
import {useFetch}  from './hook/useFetch'
import { BsFillSearchHeartFill} from "react-icons/bs";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
import NewProduct1 from "./NewProduct1";
import { BiChevronDown } from "react-icons/bi";
import NotFound from "./NotFound";
export default function Search1(){
const[filter1 ,setFilter1]=useState([])
const[alert ,setAlert]=useState("")
const [found , setFound]=useState(false)

const {data}=useFetch(' http://localhost:3000/recipes')
 
let elemenRef=useRef(null)

useEffect(()=>{   if(elemenRef.current.value==="" ){
        setFilter1(data)   
    }
},[data])
function changeHandeler(e){
  let newSearch=e.target.value
    const newFilter=data.filter((item)=>item.title.toLowerCase().includes(newSearch.toLowerCase()))
    console.log(newFilter)
    console.log(filter1)
    const newFilter2=data.some((item)=>item.title.toLowerCase().includes(newSearch.toLowerCase()))
 
//  if(elemenRef.current.value==="" ){
//     setFilter1(data)   
// }
 if(newFilter.length===0){
setFilter1([])
    // setFound(true)
    // setTimeout(()=>{
    //   setFound(false)
    // }
    // ,5000)

  }
else{
    setFilter1(newFilter )
    console.log("push")
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
           
                {found && <NotFound/>}
                {  filter1.length>0 &&<NewProduct1  product={filter1}/>  }
              
             {filter1.length===0 && <NotFound/>}
                </div>
                
             
                
                
                
                
                </>)}
               