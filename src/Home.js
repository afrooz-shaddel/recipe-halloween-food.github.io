import { useFetch } from "./hook/useFetch";
import Search1 from "./Search1";
import { BsFillSearchHeartFill} from "react-icons/bs";
import { useNavigate  , Link} from "react-router-dom";
import  './home.css';
import { CiLight } from "react-icons/ci";
import Menu from "./Menu";
import {MdDarkMode} from "react-icons/md";
import AOS from 'aos';
import NewProduct1 from "./NewProduct1";
import {contexData} from './CreatContext2';
import { useContext, useState , useEffect} from "react";
import PoletColor from "./PoletColor";

import ScrollToTop from './ScrollToTop'

export default function Home(){
 const {data ,  isLoading , error}=useFetch(' http://localhost:3000/recipes')

 const[recipie , setRecipie]=useState("")

let navigate=useNavigate()

const {theme , setTheme , color2 ,setColor2 ,show , setShow}=useContext(contexData);
const colors=["#3e2949f0",'#af00ff17']

const[open ,setOpen]=useState(false)
   function clickHandeler(item){
      setColor2(item)


   }

  //  const [showDark , setShowDark]=useState(false);
  //  useEffect(()=>{
  //      window.addEventListener("scroll" , ()=>{
  //          if(window.scrollY>0){
  //           setShowDark(true)
  //          }else{
  //           setShowDark(false) 
  //          }
  //      })
  //      AOS.init({  duration : 2000});
      
  //  },[])
   
   useEffect(()=>{
    // if( show ){
    //   document.body.style.overflow='hidden';

    // }else{
    //   document.body.style.overflow='unset';
    // }
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
 
        <div  className="homeWrapper">
        


            { isLoading && <div>isloading.......</div>}
            {error  &&  <div>{error}</div>}
          <div   className="container  colorMode"  >

          <div style={{display:"flex" , marginTop:"2rem"}}>
            {  colors.map(item=>(
     
         
                  <PoletColor key={item} color={item} clicked={()=>clickHandeler(item)}  />
          ))}
          </div>


         {/* { showDark && <div   className="searchlight" >
          <div data-aos="fade-up">
            <button   className="toggleBtn" onClick={()=>{theme=="light"?setTheme("dark")  :setTheme("light") }}>
                 {theme=="light" ?<MdDarkMode/> :<CiLight/>}
        
            </button>
            </div>
          

            {/* <div  className="searchBox"  onClick={()=>{ navigate("/search1")}}  data-aos="fade-up" >
             <BsFillSearchHeartFill    />
             {/* {show && < Search1/>} */}
             {/* </div> */}

             {/* <Link to="/search1"   className="searchBox"   >
        
             <BsFillSearchHeartFill  className="searchBox-icon"   />
         </Link>


            
          </div>} */} 



          </div>
          <div>
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…G8xwFNtzzmTJib6h2LuYHngaxmTIZZt7JPiTJkyd1MZ1M/9k=" alt="" />
          </div>
          

          
      
        
        
        

              <div>
                 <Menu   allMenu={category} filter1={filterMenu} />
              </div>
            {recipie && 
            <div>
        
                  <NewProduct1  color={color2}   product={recipie}/>
            </div>}
       
      
        
        </div>
   

    )
}