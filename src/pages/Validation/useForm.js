// import { useReducer } from "react";

// function formReducer(action , state){
// switch(action.type){
//   case "INPUT-CHANGE":{
//     let isFormValid=true
//    for(const inputId in state.value){
//     if(inputId===action.id){
//       isFormValid=isFormValid && action.isvalid
//     }else{
//       isFormValid=isFormValid && state.inputs[inputId].isvalid
//     }
//   }
//     return{
//       ...state,
//       inputs:{
//         ...state.inputs,
//         [action.inputId]:{
//           value:action.value,
//           isvalid:action.isvalid
//         }
//       },
//       isFormValid:isFormValid
    
//    }
//   }
// default:{
//   return state
// }
// }
// }

// export default function useForm(initInput , initFormValid){
//   let [formState , dispatch]=useReducer(formReducer , {inputs:initInput ,isvalid:initFormValid})


//   function onInputHandler(isvalid , value ,id){
//     dispatch({
//       type:"INPUT-CHANGE",
//       isvalid,
//      value,
//       inputId:id
//     })
//   }
//   return [formState, onInputHandler];
// }









import { useReducer } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE": {
        let isFormValid = true
        for(const inputID in state.inputs) {
      
          
            if (inputID === action.inputID) {
                isFormValid = isFormValid && action.isValid
            } else {
                isFormValid = isFormValid && state.inputs[inputID].isValid
            }
           
        }
        return {
            ...state, 
            inputs: {
                ...state.inputs,
                [action.inputID]: {
                    value: action.value,
                    isValid: action.isValid
                }
            },
            isFormValid: isFormValid
        }
    }
    default: {
      return state;
    }
  }
};

export  const useForm = (initInputs, initFormIsValid) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initInputs,
    isFormValid: initFormIsValid,
  });

  const onInputHandler = ( isValid , value,id) => {
    dispatch({
      type: "INPUT_CHANGE",
      isValid,
      value,
      inputID: id,
    
    
    });
  };

  return [formState, onInputHandler];
};
