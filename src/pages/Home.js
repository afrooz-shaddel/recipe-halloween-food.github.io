import { useFetch } from "../hook/useFetch";

import Search1 from "./Search1";
import Cart from "../component/Cart";
import { useNavigate  , Link} from "react-router-dom";
import  './home.css';
// import { CiLight } from "react-icons/ci";
import Menu from "../component/Menu";
// import {MdDarkMode} from "react-icons/md";
import AOS from 'aos';
import NewProduct1 from "../component/NewProduct1";
import {contexData} from '../CreatContext2';
import { useContext, useState , useEffect} from "react";
import PoletColor from "../component/PoletColor";
import '../fonts/fonts.css'
// import {typewriter-effect} from 'typewriter-effect'
import Typewriter from "typewriter-effect";

import ScrollToTop from '../component/ScrollToTop'
import Loader from "../component/Loader";
import AutoPlay from "../component/AutoPlay/AutoPlay";

export default function Home(){
 
//  const {data ,  isLoading , error}=useFetch('https://recipefood-json-server.liara.run/recipes')
 const {data ,  isLoading , error}=useFetch('https://recipefood-json-server.liara.run/recipes')
 const[recipie , setRecipie]=useState("")

let navigate=useNavigate()

const {theme , setTheme , color2 ,setColor2 ,show , setShow}=useContext(contexData);
const colors=["#3e2949f0",'#af00ff17']

const[open ,setOpen]=useState(false)
   function clickHandeler(item){
      setColor2(item)


   }
   


  //  const [showDark , setShowDark]=useState(false);
   useEffect(()=>{
       
   
       AOS.init({  duration : 2000});
      
   },[])
   
   useEffect(()=>{
  
    setRecipie(data)
    
   },[data])
   
   

  // function filterMenu(type){
  //   if(type==="All"){
  //     setRecipie(data)
     
  //     return;
  //   }
  //  let filterProduct=data.filter(item =>item.type===type);
  //  setRecipie(filterProduct)
  // console.log(recipie )
  //  }

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
    
      <div  className="homeHeaderPicture">
    
     
       {/* <img src="\icon\1 (1).jpg" alt="" /> */}
      <div className="headerType"> 
      
      <Typewriter
          onInit={Typewriter=>{
            Typewriter.typeString('The Best Recipes')
            .start()
            .pauseFor(2000)
            .deleteAll()
            .typeString('Halloween food')
            .start()
            .pauseFor(2000)
          }}
          options={{
            loop: true
          }}
          
          />
      
      </div> 
     
    </div>
         

       
    <Cart/> 



    <div className="linkPicture">
      <div  className="linkPictureWrapper" >
        <div  className="linkPictureWrapper-right">
        <h1>Halloween recipes and ideas</h1>
       <p>Whether you're planning your Halloween party food, looking to bake a scary showstopper, or wanting to cast a spooky spell on your favourite family dinner, our Halloween food ideas are ghoulishly great and freakishly fun! There are tasty ideas for using up pumpkin too, so there's less waste from your pumpkin carving</p>
        </div>
        <div className="linkPictureWrapper-left">
          <div className="linkPictureWrapper-leftTop">
          <div>
            <img src="\iconlink\diagram.svg" alt="" />
            <p>Variety</p>
          </div>
          <div>
            <img src="\iconlink\home-wifi.svg" alt="" />
            <p>Easy</p>
          </div>
          </div>
          <div  className="linkPictureWrapper-leftBottom">
          <div>
            <img src="\iconlink\menu-board-badge.svg" alt="" />
            <p>Variety</p>
          </div>
          <div>
            <img src="\iconlink\user.svg" alt="" />
            <p>Variety</p>
          </div>
          </div>
         

        </div>
      </div>
     
    </div>



<AutoPlay/>
        
        </>
   

    )
}