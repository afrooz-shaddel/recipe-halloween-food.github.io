import Menu from "../component/Menu";
import './modal.css';
import { BiSolidCategory } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
export default  function Modal({allMenu , close ,filter}){
 
   
    return(
        <div className="mobilecategoryitem"   >
           <RxCross2  className="cross"  onClick={()=>close(false)}/>
           <span><BiSolidCategory />Categories</span> 
         <Menu  allMenu={allMenu} menuFilter={filter}/>
        </div>
        
    )
  
}