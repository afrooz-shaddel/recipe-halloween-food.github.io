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
import Newest from "../component/Newest";

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
         
         {/* <div className="headerType"> 
      
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
      
      </div>  */}
    
      <div  className="homeHeaderPicture1">
    
      <div className="pulse">
<img src="\gift\[removal.ai]_a267accc-b9dd-496b-a31b-b06428a46897-young-beautiful-female-chef-portrait-in-kitchen-bt0m92.png" alt=""/>
    
    <div className="circle2"   style={{animationDelay:"0s"}}></div>
    <div className="circle2" style={{animationDelay:"1s"}}></div>
    <div className="circle2" style={{animationDelay:"2s"} }></div>
    <div className="circle2" style={{animationDelay:"3s"}}></div>
    <div className="circle2" style={{animationDelay:"4s"}}></div>
    <div className="circle2" style={{animationDelay:"5s"}}></div>
</div>
       
      
       
<div className='homeBackGround'>
            <div className='homeBackgroundRight'> 
              <div className='bg-Header'></div>
            
            </div>
         
            <div className='homeBackgroundLeft'>
         
<div data-aos="fade-up"data-aos-duration="6000"   data-aos-delay="600">
              
<h1 >
The Best Recipes<br></br>
                             <span>suchi</span>  food </h1>
</div>
<div data-aos="fade-up" data-aos-duration="7000" className="desWrapper"  data-aos-delay="700">
              
<p  className="desHome" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus omnis pariatur dolorem blanditiis in, officiis molestias aperiam reprehenderit, quasi expedita nam, accusantium animi quis. Officia quidem iusto cumque .</p>

</div>
                   
<div data-aos="fade-up" data-aos-duration="8000"   data-aos-delay="900">
              
              
              <button className="btn5">view our Recipe</button>
              </div>                      
  
           
           
                             </div>
          

       
         
        </div>
     
     


      {/* <p className="name">from <br/>
      Carolina Garofani </p> */}
    
     
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





<Newest/>
        
        </>
   

    )
}