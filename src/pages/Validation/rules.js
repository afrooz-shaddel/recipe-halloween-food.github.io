let requiredValue="required-value"
let maxValue="max-value";
let minValue="min-value";

export  function Validation1(){
    return{
        value:requiredValue,
    }}


 export  function ValidationMax(maxValue){
        return{
            value: maxValue,
            maxValue
        }}

 export  function ValidationMax(minValue){
    return{
                value: minValue,
                minValue
    }}