import Menu from "../component/Menu";
import './modal.css';
import { BiSolidCategory } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
export default  function Modal({allMenu , close ,filter , query1 ,category}){
 
   console.log(filter )
   console.log(allMenu )
    return(
        <div className="mobilecategoryitem"   >
           {/* <RxCross2  className="cross"  onClick={()=>close(false)}/> */}
           {/* <span><BiSolidCategory />Categories</span> */}
           <ul   onClick={filter}>
         <Menu  allMenu={allMenu} menuFilter={filter}   Query={query1} category1={category}/>
         </ul> 
       
        </div>
        
    )
  
}