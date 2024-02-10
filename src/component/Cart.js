import './cart.css';
import { useEffect , useState } from 'react';
import '../fonts/fonts.css'
import AOS from 'aos';
import Header from '../component/Header/Header';
import CartItem from './CartItem';
import { useFetch } from "../hook/useFetch";
import Menu from "./Menu";

export default function Cart(){
    useEffect(() => {
        AOS.init({  duration : 2000});
      }, [])
      let cart=[        {id:1 , title:"Healthy Halloween" ,discription:"10 Easy and Healthy Treats!" , src:"/cart/1400x919-Bloody-Mary-4cc98068-39cd-4052-8fe9-0a5bff6cb0d6-0-1400x919.jpg" , type:"drink"},
      {id:2, title:"design food for kids" ,discription:"Easy Halloween Party Food Ideas" , src:"/cart/1400x919-Tesco-Halloween-Oct23-23570-SmoresToast-4a81d39c-685d-410c-994c-8fd9e31fc6db-0-1400x919.jpg" , type:"lunch"},
      {id:3 , title:"Quick & Easy" ,discription:"Quick & Easy Halloween Treats", src:"/cart/RFO-1400x919-halloween-spiderweb-doughnuts-ef7f1376-b1fe-4c1d-a04f-165d8ed33428-0-1400x919.jpg" ,type:"sweets"},
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
          <CartItem product={item} key={item.id}/>
        ))}
    
      
    
      </div> 
      </>
    )
}