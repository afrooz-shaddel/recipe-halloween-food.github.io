import "./cartitem.css"
import { CiHeart } from "react-icons/ci";
import { IoHeart } from "react-icons/io5";
import { useState } from "react";
export default  function CartItem({product}){

    let [like , setLike]=useState(false)

        
    
    
    return(
        <div className="linkpicture " data-aos="fade-up"  >
        <img src={product.src} alt="" />
        <div style={{display:"flex"  , justifyContent:"center" , alignItems:"center"}}>
        <button className="heartbtn">
        <IoHeart color={like?'red':""}   onClick={()=>setLike(!like)}/>
        </button>
        <p className="linkpicture-title">{product.title}</p>
        </div>
        
       
       
        <p className='linkpicture-dis'>{product.discription}</p>
          </div>
    )
}   