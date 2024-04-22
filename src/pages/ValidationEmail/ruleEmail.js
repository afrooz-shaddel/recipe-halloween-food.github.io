export let emailvalid="EMAIL-VALID";
export let phonevalid="PHONE-VALID";
export let messagevalid="MESSAGE-VALID";
export let messagevalidMax="MESSAGE-VALID-MAX";
export let messagevalidMin="MESSAGE-VALID-MIN";


export function EmailValidMessage(){
return{
    value:emailvalid
}
}

export function PhoneValidMessage(){
return{
    value:phonevalid
}
}

export function ValidMessage(){
return{
    value:messagevalid
}
}

export function ValidMessage(max){
    return{
        value:messagevalidMax,
        max
    }
    }
 export function ValidMessage(min){
        return{
            value:messagevalidMin
            ,min
        }
        }

