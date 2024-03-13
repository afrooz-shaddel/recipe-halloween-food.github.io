import "./cartitem.css"
import {useLocalStorage} from "usehooks-ts";

import { CiHeart } from "react-icons/ci";
import { IoHeart } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useFetch } from "../hook/useFetch";
import Menu from "./Menu";

import { Link } from "react-router-dom";
import { click } from "@testing-library/user-event/dist/click";
export default  function CartItem({product  ,allMenu , menuFilter , data1  }){
    const {data ,  isLoading , error}=useFetch('http://localhost:3000/recipes')
    const[recipie , setRecipie]=useState("");
    // let [productData , setProductData]=useLocalStorage("product" ,product)
    let [menu , setMenu]=useState("All")  
    function filterMenu(type){
        if(type==="All"){
          setRecipie(data)
          
         
          return;
        }
       let filterProduct=data.filter(item =>item.type===type);
       setRecipie(filterProduct)
     
       }

 
   useEffect(()=>{
  
   },[])
     
       function clickHeart1(id){

console.log(productData)

       }
    
       let category2= new Set(data.map(item=>(item.type)));
       let category=["All" ,...category2] 
    
    return(<>{product.map(item=><div className="linkpicture10 " data-aos="fade-up" key={item.id} >
    <div   className="linkpictureImg10 ">
      <span></span>
    <img src={item.src} alt="" />
    
    </div>
    <div className="bac2"></div>
 
  
  <button className="heartbtn1">
  
  <IoHeart color={item.like?'red':''  } onClick={()=>clickHeart1(item.id)}  />
  </button>
<p className="picturedate">1403/11/25</p>
<p className="picturetitlefood">FOOD, FLAVOUR</p>
<h3 className="picturelorem">Flavour so good you’ll try to eat with your eyes.</h3>
  
 <button className="btnLinkProduct"><Link  to={`/product/${item.type}`}>{item.type}</Link></button>



    </div>)}
        
    </>)
}   

