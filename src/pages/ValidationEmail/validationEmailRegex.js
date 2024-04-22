export const emailText=(value)=>{
 let validEmail=/^([a-z0-9])+@+[a-z]+\.+[a-z]{2,3}$/g;
 return validEmail.test(value)
}

export const phoneText=(value)=>{
    let validPhone=/^[0-9\+]{1,}[0-9\-]{3,15}$/g;
    return validPhone.test(value)

}