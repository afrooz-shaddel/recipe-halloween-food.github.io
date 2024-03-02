import './newproduct.css'
import { FaStar } from "react-icons/fa6";
import Search1 from '../pages/Search1';
import {Link} from 'react-router-dom';
import { useEffect , useContext , useState } from 'react';
import {contexData} from '../CreatContext2';
import TrackVisibility from 'react-on-screen';
import ScrollToTop from './ScrollToTop';
import Loader from './Loader';
import { GoHeartFill } from "react-icons/go";
import AOS from 'aos';
import Loder from '../Loder/Loder';
export default function NewProduct1({product ,color}){
   const {theme , setTheme , color2 ,setColor2 ,show , setShow}=useContext(contexData);
   let img=["/product/default3.jfif" ,"/product/sweet5.png" , "/product/sweet2.jfif" ]
  let index=Math.floor(Math.random()*img.length)
  let item=img[index]
  let [like , setLike]=useState(false)
let [load , setLoad]=useState(false)
  function likeHandeler(id){
   console.log(id)
   product.find(item=>{
      if(item.id===id){
          setLike(!like)
    
      }
      
   })
    
  }

  useEffect(() => {
   AOS.init({  duration : 2000});
 }, [])


  
 return(


<div className='wrapperProduct container'   >
{!product.length && <p>..loading</p>}
{product.length>0  && product!==undefined ?
 product.map(({id , title ,cookingTime ,type, img="/product/default3.jfif" })=>{
  
  return<div   key={id}>
 <div className='productWrapper'  data-aos="fade-up"   >
   





 

 <div className='picture'>
    <img  className='picture__product' src={img} alt="" onLoad={()=>setLoad(true)} />   </div>
    
    {
      !load && <Loder/>
    }
    <div className='starType'>
    <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/>
    </div>
    <h2 className='productWrapper-title'>{title}</h2>

    <p className='productWrapper-time'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi nulla praesentium vero ut temporibus. Necessitatibus. </p>
 <p className='productWrapper-time'></p>

    <Link  className='moreLink1' to={`/recipes/${id}`} onClick={()=>setShow(false)}   >show recipe</Link>
  


 </div>


</div>
}

  
):<Loader/>}


</div>


 )
}





