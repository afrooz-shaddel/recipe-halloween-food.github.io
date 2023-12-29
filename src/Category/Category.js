import Menu from "../component/Menu";
import './category.css';


export default  function Categories({allMenu , click1 , menuFilter}){
    
   
    return(
        <div className="mobilecategoryitem"   >
           <RxCross2  className="cross"  onClick={()=>click1()}/>
         <Menu  allMenu={allMenu} menu1={menuFilter}/>
        </div>
        
    )
  
}