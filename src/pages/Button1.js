import { Link } from "react-router-dom"
export default function Button1({href ,to , className , type ,onclick ,disabled ,children}){
    
    
    if(to){
        return(
            <Link to={to} className={className}>{children}</Link>
        )
       
    }else if(href){
        return(
            <a  href={href} className={className} >{children}</a>
        )
   
    }else{

        return(
<button type={type}  className={className} onClick={onclick} disabled={disabled}>{children}</button>
        )
      
    }


}