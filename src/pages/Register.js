import { useState , useContext } from 'react'
import './Register.css'
import {useFetch} from '../hook/useFetch'
import { toast } from "react-toastify";
import { useNavigate , Link } from 'react-router-dom'
import {contexData}  from '../CreatContext2'
import InputComponent from './InputComponent/InputComponent';
import { useEffect } from 'react';
export default function Register(){
let { userInfo , isLogin , login,logOut}=useContext(contexData)
let [userName , setUserName]=useState("")
let [password , setPassword]=useState("")
let [fullName , setFullName]=useState("")
let [course , setCourse]=useState([])
let[user2 , setUser2]=useState(false)
    let [email , setEmail]=useState("")
let[registerData , setRegisterData]=useState([])
const {postData , data  , error}=useFetch('http://localhost:3000/user' , 'POST')
    let [error1 , setError1]=useState("")
    let [valid , setValid]=useState(true)
    let navigator=useNavigate();

   
   //  const {postData , data  , error}=useFetch('http://localhost:3000/user','POST')
    
   //  const {data }=useFetch('http://localhost:3000/user' )
    function clickNavigateLogin(){
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
     
     
      return isproced;
    }
    let newDataRegister={userName , password, fullName, email , course}
// useEffect(()=>{
   
//    fetch('http://localhost:3000/user',{
//       method: 'POST',
//       body:JSON.stringify(newDataRegister),
     
//       headers: {
//          'Content-Type': 'application/json',
//        },
//      }).then(res=>res.json())
//      .then(data=>{

//      })

//   console.log(newDataRegister)

// } ,[])
// console.log(newDataRegister)

    function submitRegister(event){
     event.preventDefault();


  if(isvalid()){
 
  
   let newDataRegister={userName , password, fullName, email , course}


 

  fetch('http://localhost:3000/user',{
   method: 'POST',
   body:JSON.stringify(newDataRegister),
  
   headers: {
      'Content-Type': 'application/json',
    },
  }).then(res=>res.json())
  .then(data=>{
   // if (res.error) {
   //    throw new Error(res.error)
   //  }
 console.log(data)

  
  })

  }}


    return(
        <div className='registerWrapper'>
          <form action="" className='register-form'>
             <h2 className='register-title'>Registeration</h2>
             <div className='register-formWrapper'>
             <div className='register'>
                   <label className='register-label' htmlFor="">  Name <span>*</span> </label>
                   <input className='register-input' value={fullName} type="text" onChange={(event)=>setFullName(event.target.value)} />
                   {/* <InputComponent  className="register-input"  type="text" element="input" /> */}
                </div>
                <div className='register'>
                   <label htmlFor="" className='register-label'>UserName  <span>*</span> </label>
                   {/* <InputComponent  className="register-input"  type="text" element="input" /> */}
                   <input required className='register-input' value={userName} type="text" onChange={(event)=>setUserName(event.target.value)} />
                </div>
               
                <div className='register'>
                   <label className='register-label' htmlFor="">Password  <span>*</span> </label>
                   {/* <InputComponent  className="register-input"  type="password" element="input" /> */}
                   <input className='register-input' value={password} type="password"  onChange={(event)=>setPassword(event.target.value)} />
                </div>

           
                <div className='register'>
                   <label className='register-label' htmlFor="">Email  <span>*</span> </label>
                   {/* <InputComponent  className="register-input"  type="email" element="input" /> */}
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
     <p  className='loginbtnlink' onClick={clickNavigateLogin}> Login</p>


        </div>
    )
}