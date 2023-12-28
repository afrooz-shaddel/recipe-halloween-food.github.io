import './cart.css';
import { useEffect } from 'react';
import '../fonts/fonts.css'
import AOS from 'aos';
import Header from '../component/Header/Header';
import CartItem from './CartItem';

export default function Cart(){
    useEffect(() => {
        AOS.init({  duration : 2000});
      }, [])
      let cart=[        {id:1 , title:"Healthy Halloween" ,discription:"10 Easy and Healthy Treats!" , src:"/icon/halloween_dinos_copy.webp"},
      {id:2, title:"design food for kids" ,discription:"Easy Halloween Party Food Ideas" , src:"/icon/ghosts 1.jpg"},
      {id:3 , title:"Quick & Easy" ,discription:"Quick & Easy Halloween Treats", src:"/gift/images (3).jpg"},
    ]
     
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