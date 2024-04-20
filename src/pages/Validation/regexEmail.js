const emailPattern=(value)=>{
 const emailRegex=/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/g
 return emailRegex.test(value)
}