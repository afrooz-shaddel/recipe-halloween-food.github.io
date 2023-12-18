import './allrecipe.css';
import './fonts/fonts.css';
import { useFetch } from "./hook/useFetch";
import  './home.css';
import Header from './Header/Header';
import Menu from "./Menu";
import AOS from 'aos';
import NewProduct1 from "./NewProduct1";
import {contexData} from './CreatContext2';
import { useContext, useState , useEffect} from "react";
import PoletColor from "./PoletColor";
export default function Allrecipes(){
    const {data ,  isLoading , error}=useFetch(' http://localhost:3000/recipes')

    
const[recipie , setRecipie]=useState("")
useEffect(()=>{
       
   
    AOS.init({  duration : 2000});
   
},[])
const {theme , setTheme , color2 ,setColor2 ,show , setShow}=useContext(contexData);
useEffect(()=>{

 setRecipie(data)
 
},[data])
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
      <Header item='R E C I P E S'/>
    <div className='homeWrapper'>
      
    <div>
    <Menu   allMenu={category} filter1={filterMenu} />
 </div>
{recipie && 
<div>

     <NewProduct1  color={color2}   product={recipie}/>
</div>}
</div>
</>

)}