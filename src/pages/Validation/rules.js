  let requiredValue="required-value"
  let maxValue="max-value";
  let minValue="min-value";
  let emailValue="email-value";

export  function Validation1(){
    return{
        value:requiredValue,
    }}


 export  function ValidationMax(max){
        return{
            value: maxValue,
           max
        }}

 export  function ValidationMin(min){
    return{
                value: minValue,
                min
    }}

    export  function ValidationEmail(){
        return{
                    value: emailValue,
                  
        }}

export default { requiredValue,
    maxValue,
    minValue ,
emailValue}