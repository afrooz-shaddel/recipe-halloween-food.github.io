import './newproduct.css'

import Search1 from './Search1';
import {Link} from 'react-router-dom';
import { useEffect , useContext , useState } from 'react';
import {contexData} from './CreatContext2';
import TrackVisibility from 'react-on-screen';
import ScrollToTop from './ScrollToTop';

import AOS from 'aos';
export default function NewProduct1({product ,color}){
   const {theme , setTheme , color2 ,setColor2 ,show , setShow}=useContext(contexData);
   let img=["/product/default3.jfif" ,"/product/sweet5.png" , "/product/sweet2.jfif" ]
  let index=Math.floor(Math.random()*img.length)
  let item=img[index]


  useEffect(() => {
   AOS.init({  duration : 2000});
 }, [])

  
 return(


<div className='wrapperProduct container'   >
{product && product.map(({id , title ,cookingTime , img="/product/default3.jfif" })=>{
  
  return<div   key={id}>
 <div className='productWrapper'   >
 <h2 className='productWrapper-title'>{title}</h2>
 <div className='picture'>
    <img  className='picture__product' src={img} alt="" />   </div>
 

 <p className='productWrapper-time'>CookingTime: {cookingTime}</p>

    <Link  className='moreLink' to={`/recipes/${id}`} onClick={()=>setShow(false)}   >show recipie</Link>
  


 </div>


</div>
}

  
)}


</div>


 )
}





