import  React , {useEffect , useState ,useMemo} from 'react';
import {BrowserRouter ,Routes ,Route} from 'react-router-dom';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Create from './pages/Create';
import { BsFillSearchHeartFill} from "react-icons/bs";
import { CiLight } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Menu from "./component/Menu";
import {MdDarkMode} from "react-icons/md";
import AOS from 'aos';
import Recipes  from './pages/Recipes';
import Search1 from './pages/Search1';
import { useContext } from 'react';
import {contexData} from './CreatContext2';
import Allrecipes from './pages/Allrecipes';
import Contact from './pages/Contact/Contact';
import './App.css'
import About from './pages/About/About';
import Nav1 from './component/Nav1';
import ScrollToTop from './component/ScrollToTop'
import NotFound from './pages/NotFound';
import Searchend from './Searchend';
import Product from './Product/Product';
export default function App(){

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
          

         
             {/* <div data-aos="fade-left">
             <Link to="/search1"   className="searchBox"   >
        
             <BsFillSearchHeartFill  className="searchBox-icon"   />
         </Link>
         </div> */}
       
            
          </div>}

   
   
  
      <Nav1/>



     <Routes>
      <Route   path='/'      element={< Home/>  } />
      <Route  path='/create'   element={  <Create/>}/>
      <Route  path='/gallery'   element={  <Gallery/>}/>
      <Route  path='/allrecipes'   element={  <Allrecipes/>}/>
      <Route  path='/search1'   element={  <Search1/>}/>
      <Route  path='/recipes/:id'   element={  <Recipes/>}/>
      <Route  path='/product/:type'   element={<Product/>}/>
      <Route  path='/contact'   element={  <Contact/>}/>
      <Route  path='/about'   element={  <About/>}/>
      <Route path='/search'   element={<Searchend/>}/>
      <Route  path='/*'   element={  <NotFound/>}/>
     </Routes>

   <Contact/>

    </BrowserRouter>


    </div>

  )



}