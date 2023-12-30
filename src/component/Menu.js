import { useState } from 'react'
import { useFetch } from "../hook/useFetch";

import './menu.css'
export default  function Menu({allMenu , menuFilter , Query  , category1}){
let [menu , setMenu]=useState("All")
const {data ,  isLoading , error}=useFetch('http://localhost:3000/recipes')
    return(

        <ul className='menu' >
            {allMenu.map(item=>(<li  key={item} className={console.log(category1)}    onClick={menuFilter} >{item}</li>))}

        </ul>


    )
} 
// className={item==menu? "menuItem active1":"menuItem"}