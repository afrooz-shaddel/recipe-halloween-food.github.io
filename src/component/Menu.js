import { useState } from 'react'
import './menu.css'
export default  function Menu({allMenu , filter1}){
let [menu , setMenu]=useState("All")

    return(

        <ul className='menu'>
            {allMenu.map(item=>(<li  key={item} className={item==menu? "menuItem active1":"menuItem"} onClick={()=>{filter1(item)
            setMenu(item)}}>{item}</li>))}

        </ul>


    )
}