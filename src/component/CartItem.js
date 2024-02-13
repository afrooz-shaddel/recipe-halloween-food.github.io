import "./cartitem.css"
import {useLocalStorage} from "usehooks-ts";

import { CiHeart } from "react-icons/ci";
import { IoHeart } from "react-icons/io5";
import { useState } from "react";
import { useFetch } from "../hook/useFetch";
import Menu from "./Menu";

import { Link } from "react-router-dom";
import { click } from "@testing-library/user-event/dist/click";
export default  function CartItem({product  ,allMenu , menuFilter , data1  }){
    const {data ,  isLoading , error}=useFetch('https://recipefood-json-server.liara.run/recipes')
    const[recipie , setRecipie]=useState("");
    let [id , setId]=useLocalStorage("id", product.id)
    let [like , setLike]=useLocalStorage("like" ,false)
    
    let [menu , setMenu]=useState("All")  
    function filterMenu(type){
        if(type==="All"){
          setRecipie(data)
          
         
          return;
        }
       let filterProduct=data.filter(item =>item.type===type);
       setRecipie(filterProduct)
      console.log(recipie )
       }
       function clickHeart(id){
      const stored=localStorage.getItem("id")
console.log(stored)
       }
    
       let category2= new Set(data.map(item=>(item.type)));
       let category=["All" ,...category2] 
    
    return(
        <div className="linkpicture " data-aos="fade-up"  >
        <img src={product.src} alt="" />
        <button className="heartbtn">
        <IoHeart color={like?'red':''}   onClick={()=>clickHeart(id)}/>
        </button>
        <div style={{display:"flex"  , justifyContent:"center" , alignItems:"center"}}>
       
   
        </div>
        
       <button className="btnLinkProduct"><Link  to={`/product/${product.type}`}>{product.type}</Link></button>


    
          </div>
    )
}   

