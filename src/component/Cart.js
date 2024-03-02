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
  // let [like , setLike]=useLocalStorage('like' ,false)

  // function clickHeart(){
  //   setLike( like=>!like)
  // }
    useEffect(() => {
        AOS.init({  duration : 2000});
      }, [])
      let cart=[        {id:1 , title:"Healthy Halloween" ,discription:"10 Easy and Healthy Treats!" , src:"/cart/New folder/2148224532.jpg" , type:"Chicken" , like:"false"},
      {id:2, title:"design food for kids" ,discription:"Easy Halloween Party Food Ideas" , src:"/cart/New folder/2148195563.jpg" , type:"Salmon", like:"false"},
      // {id:3 , title:"Quick & Easy" ,discription:"Quick & Easy Halloween Treats", src:"/suchi2/images (9).png" ,type:"sweets", like:"false"},
      {id:3 , title:"Quick & Easy" ,discription:"Quick & Easy Halloween Treats", src:"/cart/New folder/13166.jpg" ,type:"Rice", like:"false"},
   
   
    ]
    // 

    const {data ,  isLoading , error}=useFetch('http://localhost:3000/recipes')
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
       
        {/* {cart.map(item=>( */}
          <CartItem product={cart}  />
        {/* // ))} */}
    
      
    
      </div> 
      </>
    )
}