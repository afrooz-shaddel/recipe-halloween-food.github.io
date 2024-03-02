import { useState } from 'react'
import './Register.css'
import {useFetch} from '../hook/useFetch'
import { toast } from "react-toastify";
import { useNavigate , Link } from 'react-router-dom'

export default function Register(){

let [userName , setUserName]=useState("")
let [password , setPassword]=useState("")
let [fullName , setFullName]=useState("")
let[user2 , setUser2]=useState(false)
    let [email , setEmail]=useState("")

    let [error1 , setError1]=useState("")
    let [valid , setValid]=useState(true)
    let navigator=useNavigate();

    const {postData }=useFetch('http://localhost:3000/user' , 'POST')
    
    const {data }=useFetch('http://localhost:3000/user' )
    function CLICKED(){
      navigator('/login')
      
    }
    
    const isvalid=()=>{
      let isproced=true;
      let errorMassage="please enter the value in  "
      // let errorRegister="You already used this email to sign up with a social account"
      if(userName===null  || userName==""){
         isproced=false
         errorMassage +=' userName'
      }
      if(password===null  || password==""){
         isproced=false
         errorMassage +=' password'
      }else if(password.length<6){
         isproced=false
         toast.warning('password length at least 6 character')
      }
      if(email===null  || email==""){
         isproced=false
         errorMassage +=' email'
      }else if(!/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email)){
         isproced=false
         toast.warning('please enter valid email')
      }
      if(fullName===null  && fullName=="" && !fullName.length===password){
         isproced=false
         toast.warning('password not match')
      }

      
      // if(!isproced){
      //    toast.warning(errorMassage)
         
      // }
      //  else{ data.map(item=>{
      //    if(item.userName===userName || item.email==email){
      //       isproced=false;
      //     toast.warning("You already used this email to sign up with a social account")
      //    }
      // })
         
   
   // }
     
      return isproced;
    }
    
    
    function submitRegister(event){
     event.preventDefault();

  if(isvalid()){
   postData({userName, password, fullName, email})

   navigator("/login")
  }

   

}
    return(
        <div className='registerWrapper'>
          <form action="" className='register-form'>
             <h2 className='register-title'>Registeration</h2>
             <div className='register-formWrapper'>
                <div className='register'>
                   <label htmlFor="" className='register-label'>UserName  <span>*</span> </label>
                   <input required className='register-input' value={userName} type="text" onChange={(event)=>setUserName(event.target.value)} />
                </div>
                <div className='register'>
                   <label className='register-label' htmlFor="">Password  <span>*</span> </label>
                   <input className='register-input' value={password} type="password"  onChange={(event)=>setPassword(event.target.value)} />
                </div>

                <div className='register'>
                   <label className='register-label' htmlFor="">  Confirm Password <span>*</span> </label>
                   <input className='register-input' value={fullName} type="text" onChange={(event)=>setFullName(event.target.value)} />
                </div>
                <div className='register'>
                   <label className='register-label' htmlFor="">Email  <span>*</span> </label>
                   <input className='register-input' value={email} type="email" onChange={(event)=>setEmail(event.target.value)} />
                </div>
             </div>
          
              <div className='registerbtnwrapper'>
                <button type='submit' className='loginbtn' style={{color:"white" ,    width: "17rem",
    height:" 2.5rem",
    backgroundColor: "#ff8243",
    borderRadius: "0.3rem",
   
    border: "none"}}  onClick={submitRegister}>Register</button>
                {/* <a href="" >Login</a> */}
                {/* <Link  to="/login" className='registerlink'>Login</Link> */}
              </div>

          </form>

          <h3 href=""    style={{fontSize: '1rem',
    marginTop: "1rem",
    fontFamily: 'Roboto'}} >if you dont have account, Please </h3>
     <p  className='loginbtnlink' onClick={CLICKED}> Login</p>


        </div>
    )
}