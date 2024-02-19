import './cart.css';
import { useEffect , useState } from 'react';
import '../fonts/fonts.css'
import AOS from 'aos';
import Header from '../component/Header/Header';
import CartItem from './CartItem';
import { useFetch } from "../hook/useFetch";
import Menu from "./Menu";
import {useLocalStorage} from "usehooks-ts";

export default function Cart(){
  let [like , setLike]=useLocalStorage('like' ,false)

  function clickHeart(){
    setLike( like=>!like)
  }
    useEffect(() => {
        AOS.init({  duration : 2000});
      }, [])
      let cart=[        {id:1 , title:"Healthy Halloween" ,discription:"10 Easy and Healthy Treats!" , src:"/suchi2/download (1).png" , type:"drink"},
      {id:2, title:"design food for kids" ,discription:"Easy Halloween Party Food Ideas" , src:"/suchi2/images (8).png" , type:"lunch"},
      {id:3 , title:"Quick & Easy" ,discription:"Quick & Easy Halloween Treats", src:"/suchi2/images (9).png" ,type:"sweets"},
    ]
    // 

    const {data ,  isLoading , error}=useFetch('https://recipefood-json-server.liara.run/recipes')
    const[recipie , setRecipie]=useState("")

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
    
       let category2= new Set(data.map(item=>(item.type)));
       let category=["All" ,...category2] 
    
     
    return(
    
    
      <>
    
      <Header item="S E R V I C E S"/>
         <div className='cartWrapper '>
       
        {cart.map(item=>(
          <CartItem product={item} key={item.id} clicked={clickHeart} like={like}/>
        ))}
    
      
    
      </div> 
      </>
    )
}