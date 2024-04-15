import { useReducer, useState } from "react"
import './inputComponent.css'
import { green } from "@mui/material/colors"
// export default function InputComponent({className , placeholder ,type ,element  }){

//   function reducerComponent(state , action){
//     console.log(action , state)

//   switch(action.type){
   
//     case "CHANGE":{
//       return{
//         ...state,
//        isValid:true,
//        count:action.count

//       }
      
//     } default:{
//       return state
//     }
//   }
  
// } 


//   let [changeInput , dispatch]=useReducer( reducerComponent ,{count:"" , isValid:false})

// function changeInputComponent(event){
// dispatch({
//   count:event.target.value,
//   type:"CHANGE"
// })

// }
// greenBorder
// function reducerChangeDta(state , action){
//   console.log(state , action)
//   switch(action.type){
//     case "CHANGE":{
//       return{
//         ...state ,
//         count:action.count,
//         isValid:true
//       }
 
//     }default:{
//         state
//     }
//   }
// }
// const [changeInput , dispatch]=useReducer(reducerChangeDta,{count:"" , isValid:false})
// function changeInputComponent(event){
//  dispatch({type:"CHANGE" , count:event.target.value})
// }
// const element1=element==="input"?(<>
// <input className={`${ className} ${changeInput.isValid?"greenBorder" :"redBorder"}`     }  placeholder={placeholder}    type={type} onChange={changeInputComponent} value={changeInput.count}/></>):(<textarea
// className={className} placeholder={placeholder} onChange={changeInputComponent} value={changeInput.count}

// />)
//   return(
//    <>{element1}</> 
//   )
// }

export default function InputComponent({placeholder,className ,type, element  }){
 function changeEventData(state , action){
  switch (action.type) {
   
    case "CHANGE":{
      {console.log(action)}
      return{
        ...state ,
        value:action.value,
        isvalid:action.isvalid
      }
    }
      
   
  
    default:{
      return{
        state
      }
    }
      
  }

 }

  let [changeInputData , dispatch]=useReducer(changeEventData,{value:"" , isvalid:false} )
  function changeHandelerData(event){
   dispatch({type:"CHANGE" , value:event.target.value , isvalid:true})
   }
  
  return(<>{element==="input"?<input type={type} value={changeInputData.value} className={changeInputData.isvalid? `${className } greenBorder`:`${className } redBorder`} placeholder={placeholder} onChange={changeHandelerData} />:<textarea value={changeInputData.value} type={type} className={className} placeholder={placeholder} onChange={changeHandelerData} />}</>)

}