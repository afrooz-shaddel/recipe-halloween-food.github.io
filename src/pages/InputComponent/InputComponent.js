import { useReducer, useState } from "react"
import './inputComponent.css'
import { green } from "@mui/material/colors"
export default function InputComponent({className , placeholder ,type ,element  }){

  function reducerComponent(state , action){
    console.log(action , state)

  switch(action.type){
   
    case "CHANGE":{
      return{
        ...state,
       isValid:true,
       count:action.count

      }
      
    } default:{
      return state
    }
  }
  
} 


  let [changeInput , dispatch]=useReducer( reducerComponent ,{count:"" , isValid:false})

function changeInputComponent(event){
dispatch({
  count:event.target.value,
  type:"CHANGE"
})

}
// greenBorder

const element1=element==="input"?(<>
<input className={`${ className} ${changeInput.isValid?"greenBorder" :"redBorder"}`     }  placeholder={placeholder}    type={type} onChange={changeInputComponent} value={changeInput.count}/></>):(<textarea
className={className} placeholder={placeholder} onChange={changeInputComponent} value={changeInput.count}

/>)
  return(
   <>{element1}</> 
  )
}