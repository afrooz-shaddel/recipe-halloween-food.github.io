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

    useEffect(() => {
        AOS.init({  duration : 2000});
      }, [])
      let cart=[        {id:1 , title:"HEALTHY FOOD" ,discription:"Flavour so good you’ll try to eat with your eyes" , src:"/cart/New folder/2148224532.jpg" , type:"Chicken" , like:false , date:"08/09/2022"},
      {id:2, title:"RECIPIE" ,discription:"Flavour so good you’ll try to eat with your eyes" , src:"/cart/New folder/2148195563.jpg" , type:"Salmon", like:false, date:"11/09/2022"},
      {id:3 , title:"FOOD, FLAVOUR " ,discription:"Flavour so good you’ll try to eat with your eyes", src:"/cart/New folder/13166.jpg" ,type:"Rice", like:false, date:"10/09/2022"},
   

    ]
    // 

    const {data ,  isLoading , error}=useFetch('https://api-json-server-two.vercel.app/recipes')
    const[recipie , setRecipie]=useState("")

    let [menu , setMenu]=useState("All")  
    function filterMenu(type){
        if(type==="All"){
          setRecipie(data)
          
         
          return;
        }
       let filterProduct=data.filter(item =>(item.type.toLowerCase())===type.toLowerCase());
       setRecipie(filterProduct)
     
       }
      
    
       let category2= new Set(data.map(item=>(item.type)));
       let category=["All" ,...category2] 
    
     
    return(
    
    
      <>
    
      <Header item="S E R V I C E S"/>

      <div data-aos="fade-up" className='topNotch'>
        <h3 className='offercart'>We Offer Top Notch</h3>
        <p className='offercartlorem'>Prepare yourself for a journey of flavors, textures, and aromas that will tantalize your taste buds and leave you craving for more .</p>
      </div>
         <div className='cartWrapper '>
    
 
      {/* {rt.forEach(itcaem=>  <CartItem product={item}   />)} */}

      {/* <CartItem product={cart} /> */}
    
   
         
       <CartItem product={cart} />
     
  
    
      
    
      </div> 
      </>
    )
}