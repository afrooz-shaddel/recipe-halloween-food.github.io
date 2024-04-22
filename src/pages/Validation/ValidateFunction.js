 import rules from './rules'
 import emailPattern from '../Validation/regexEmail'
 export default function ValidateFunction(value , validations){
   let TrueFalse=[];
   
   
   for (const validator of validations) {
  
 
//   


  if(validator.value===rules.minValue){
   console.log(validator.value)
    value.trim().length<validator.min && TrueFalse.push(false)
  }
  if(validator.value===rules.maxValue){
    console.log(validator.value)
    value.trim().length>validator.max && TrueFalse.push(false)
  }
  if(validator.value===rules.requiredValue){ 
        value.trim().length===0 && TrueFalse.push(false)
      }
  if(validator.value===rules.emailValue){
    !emailPattern(value) && TrueFalse.push(false)
  
  }


 


  }
  if(TrueFalse.length){

    return false;
}else{
    return true;
}

}