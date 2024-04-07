import "./cartitem.css"
import {useLocalStorage} from "usehooks-ts";

import { CiHeart } from "react-icons/ci";
import { IoHeart } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useFetch } from "../hook/useFetch";
import Menu from "./Menu";

import { Link } from "react-router-dom";
import { click } from "@testing-library/user-event/dist/click";
export default  function CartItem({product }){
    const {data ,  isLoading , error}=useFetch('http://localhost:3000/recipes')
    const[recipie , setRecipie]=useState("");
// let [heart , setHeart]=useState(like)
    let [menu , setMenu]=useState("All") 
    let [product1 , setProduct1]=useLocalStorage('data' ,product)
  
   


   
    function filterMenu(type){
        if(type==="All"){
          setRecipie(data)
          
         
          return;
        }
       let filterProduct=data.filter(item =>item.type===type);
       setRecipie(filterProduct)
     
       }

 
 
     
      let [dataProduct , setDataProduct]=useLocalStorage('product10' ,product)
       function likeHeart(id){
       let newData=dataProduct.find(item=>item.id===id)

     + dataProduct.some(item=>{
          if(item.id===id){
            item.like=!item.like} 
        
         setDataProduct(dataProduct)
         })
       
        
      }
   

       
     
  
    
       let category2= new Set(data.map(item=>(item.type)));
       let category=["All" ,...category2] 
    
    return(<>{dataProduct.map(item=>( <div className="linkpicture10 " data-aos="fade-up" key={item.id} >
    <div   className="linkpictureImg10 ">
      <span></span>
    <img src={item.src} alt="" />
    
    </div>
    <div className="bac2"></div>
 
  
  <button className="heartbtn1">

  <IoHeart color={item.like?"red":"white"}   onClick={()=>likeHeart(item.id)}  />
 
  </button>
<p className="picturedate">{item.date}</p>
<p className="picturetitlefood">{item.title}</p>
<h3 className="picturelorem">{item.discription}</h3>
  
 <button className="btnLinkProduct"><Link  to={`/product/${item.type}`}>{item.type}</Link></button>



    </div>))}
   
        
    </>)
}   

