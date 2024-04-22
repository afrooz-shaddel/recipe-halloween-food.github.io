import { useEffect, useReducer, useState } from "react"
import './inputComponent.css'
import { green } from "@mui/material/colors"
import ValidateFunction from "../Validation/ValidateFunction"
function changeEventData(state , action){
  switch (action.type) {
 
    case "CHANGE":{
    
      return{
        ...state ,
        value:action.value,
        isvalid:ValidateFunction(action.value ,action.valid1)
        
      }
    }
      
   
  
    default:{
      return{
        state
      }
    }
      
  }

 }

export default function InputComponent({placeholder,className ,type, element
   , validation , onInputHandler ,id  }){

  let [changeInputData , dispatch]=useReducer(changeEventData,{value:"" , isvalid:false} )
  function changeHandelerData(event){
   dispatch({type:"CHANGE" , value:event.target.value , isvalid:true ,valid1:validation })
   }
   const {value , isvalid}=changeInputData
   useEffect(()=>{
    onInputHandler
  },[value])
  return(<>{element==="input"?<input type={type} value={changeInputData.value} valid1={validation} className={changeInputData.isvalid? `${className } greenBorder`:`${className } redBorder`} placeholder={placeholder} onChange={changeHandelerData} />:<textarea value={changeInputData.value} type={type} className={className} placeholder={placeholder} onChange={changeHandelerData} valid1={validation} />}</>)

}