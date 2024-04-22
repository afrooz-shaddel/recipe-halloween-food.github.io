import { useReducer } from "react";

function formReducer(action , state){
switch(action.type){
  case "INPUT-CHANGE":{
    let isFormValid=true
   for(const inputId in state.value){
    if(inputId===action.id){
      isFormValid=isFormValid && action.isvalid
    }else{
      isFormValid=isFormValid && state.inputs[inputId].isvalid
    }
  }
    return{
      ...state,
      inputs:{
        ...state.inputs,
        [action.inputId]:{
          value:action.value,
          isvalid:action.isvalid
        }
      },
      isFormValid:isFormValid
    
   }
  }
default:{
  return state
}
}
}

export default function useForm(initInput , initFormValid){
  let [formState , dispatch]=useReducer(formReducer , {inputs:initInput ,isvalid:initFormValid})


  function onInputHandler(isvalid , input ,id){
    dispatch({
      type:"INPUT-CHANGE",
      isvalid,
      input,
      inputId:id
    })
  }
  return [formState, onInputHandler];
}