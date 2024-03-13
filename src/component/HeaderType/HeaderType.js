import './headertype.css';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { BsSlashLg } from "react-icons/bs";
export default function HeaderType1({links}){
    return(
        
            <ul className='headertypelist'>
        {links.map(item=>(
<div key={item.id} className='headertypeicon'><li > <Link className='headertypelink' to={item.to}>{item.title}</Link></li>
        {item.id!==links.length?  <IoIosArrowBack  className='svgheader'/>: null}
        </div>
        ))}
</ul>
      
    )

}