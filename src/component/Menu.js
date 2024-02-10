import { useState } from 'react'

import { Link } from 'react-router-dom'
import './menu.css'
export default  function Menu({allMenu , menuFilter , data1 }){
let [menu , setMenu]=useState("All")


    return(

        <ul className='menu' >
            {allMenu.map(item=>(<li  key={item} className={item.toLowerCase()==menu.toLowerCase()?'menuItem active1':"menuItem"} onClick={()=>{setMenu(item)
            menuFilter}}  >
            {item}
           
                
                </li>))}
       
        </ul>


    )
} 
