import  React , {useEffect , useState ,useMemo} from 'react';
import {BrowserRouter ,Routes ,Route} from 'react-router-dom';
import { Button } from '@mui/material';

import Gallery from './Gallery';
import Home from './Home';
import Create from './Create';
import { BsFillSearchHeartFill} from "react-icons/bs";
import { CiLight } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Menu from "./Menu";
import {MdDarkMode} from "react-icons/md";
import AOS from 'aos';
import Recipes  from './Recipes';
import Search1 from './Search1';
import { useContext } from 'react';
import {contexData} from './CreatContext2';
import Allrecipes from './Allrecipes';

import './App.css'

// import Button from '@mui/material-next/Button';
import { useRef } from 'react';
// import About from './About';
// import Home from './Home';
// import Error from './Error';
// import Product2 from './Tost/Product2';
// import Product3 from './Tost/Product3'
// import Nav from './Nav';
// import Shop from './Shop';
// import Login from './Login';

// import Search from  './pages/Search/Search';
// import Product from './pages/Product/Product';
// import Ingredient from './pages/Ingredient/Ingredient';
// import CreatFood from './pages/CreatFood/CreatFood';
// import Nav from './Nav';
// import ButtonEnter from './ButtonEnter'
// import {DeleteIcon} from '@mui/icons-material';

import Nav1 from './Nav1';
import ScrollToTop from './ScrollToTop'

export default function App(){

let elementRef=useRef()

const {theme , setTheme , color2 ,setColor2}=useContext(contexData);
const [showDark , setShowDark]=useState(false);
useEffect(()=>{
    window.addEventListener("scroll" , ()=>{
        if(window.scrollY>0){
         setShowDark(true)
        }else{
         setShowDark(false) 
        }
    })
    AOS.init({  duration : 2000});
   
},[])

  return(
    <div className={theme=='dark' ? 'App darkMode':'App lightMode'} > 
    <ScrollToTop/>
    <BrowserRouter>

    { showDark && <div   className="searchlight" >
          <div data-aos="fade-left">
            <button   className="toggleBtn" onClick={()=>{theme=="light"?setTheme("dark")  :setTheme("light") }}>
                 {theme=="light" ?<MdDarkMode/> :<CiLight/>}
        
            </button>
            </div>
          

         
             <div data-aos="fade-left">
             <Link to="/search1"   className="searchBox"   >
        
             <BsFillSearchHeartFill  className="searchBox-icon"   />
         </Link>
         </div>
       
            
          </div>}

   
   
  
      <Nav1/>



     <Routes>
      <Route   path='/'      element={< Home/>  } />
      <Route  path='/create'   element={  <Create/>}/>
      <Route  path='/gallery'   element={  <Gallery/>}/>
      <Route  path='/allrecipes'   element={  <Allrecipes/>}/>
      <Route  path='/search1'   element={  <Search1/>}/>
      <Route  path='/recipes/:id'   element={  <Recipes/>}/>

     </Routes>

   

    </BrowserRouter>


    </div>

  )



}