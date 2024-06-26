import { useState , useContext } from 'react'
import './Register.css'
import {useFetch} from '../hook/useFetch'
import { toast } from "react-toastify";
import { FaUserPlus } from "react-icons/fa";
import { useNavigate , Link } from 'react-router-dom'
import {contexData}  from '../CreatContext2'
import { FaLockOpen } from "react-icons/fa6";
import InputComponent from './InputComponent/InputComponent';
import { useEffect } from 'react';
import { MdEmail } from "react-icons/md";
import Button1 from './Button1';
import { MdOutlineMailOutline } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import {useForm }from './Validation/useForm';
import {Validation1, ValidationMax
   ,ValidationMin , ValidationEmail} from '../pages/Validation/rules'
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
    
   //  const isvalid=()=>{
   //    let isproced=true;
   //    let errorMassage="please enter the value in  "
      
   //    if(userName===null  || userName==""){
   //       isproced=false
   //       errorMassage +=' userName'
   //    }
   //    if(password===null  || password==""){
   //       isproced=false
   //       errorMassage +=' password'
   //    }else if(password.length<6){
   //       isproced=false
   //       toast.warning('password length at least 6 character')
   //    }
   //    if(email===null  || email==""){
   //       isproced=false
   //       errorMassage +=' email'
   //    }else if(!/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email)){
   //       isproced=false
   //       toast.warning('please enter valid email')
   //    }
     
     
   //    return isproced;
   //  }


    let [formState, onInputHandler]=useForm({
      username:{value:"",
      isValid:false,},
     password:{
      value:"",
      isValid:false, },
      email:{
         value:"",
         isValid:false,
      }
      
    }, false)
    function submitRegister(event){
      event.preventDefault()

console.log("T")
  
   let newDataRegister={userName:formState.inputs.username.value ,
   password: formState.inputs.password.value  , email:formState.inputs.email.value}

console.log(formState.inputs.email.value)
 

  fetch('http://localhost:3000/user',{
   method: 'POST',
   body:JSON.stringify(newDataRegister),
  
   headers: {
      'Content-Type': 'application/json',
    },
  }).then(res=>res.json())
  .then(data=>{
 
 console.log(data)

  
  })

  }




    return(
        <div className={`registerWrapper ${formState.isFormValid ?'registerWrapper-success' :'registerWrapper-error'}`}>
          <form action="" className='register-form'  onSubmit={submitRegister}>
             <h2 className='register-title'>Registeration</h2>
             <div className='register-formWrapper'>
           
                <div className='register'>
                   {/* <label htmlFor="" className='register-label'>UserName  <span>*</span> </label> */}
                   <InputComponent  className="register-input"  type="text" element="input" placeholder={"userName"} 
                   
                     validation={[Validation1() ,ValidationMax(12), ValidationMin(8) ]} id="username" onInputHandler={onInputHandler}
                   />                       
                
                   {/* <input required className='register-input' value={userName} type="text" onChange={(event)=>setUserName(event.target.value)} placeholder='userName' /> */}
                   <span className='span-i'><FaUser/></span> 
                </div>
               
                <div className='register'>
                   {/* <label className='register-label' htmlFor="">Password  <span>*</span> </label> */}
                   <InputComponent  className="register-input"  type="password" element="input" placeholder={"password"} id="password" onInputHandler={onInputHandler}
                    validation={[
                     Validation1() ,ValidationMax(12), ValidationMin(8) ]} />
                   {/* <input className='register-input' value={password} type="password"  onChange={(event)=>setPassword(event.target.value)} placeholder='password' /> */}
                   <span className='span-i'><FaLockOpen /></span> 
                </div>

           
                <div className='register'>
                   {/* <label className='register-label' htmlFor="">Email  <span>*</span> </label> */}
                   <InputComponent  className="register-input"  type="email" element="input" placeholder={"email"}  validation={[ Validation1()  , ValidationEmail()]} id="email" onInputHandler={onInputHandler} />
                    {/* <div className='register-wrapper-input' > */}
                    {/* <input className='register-input' value={email} type="email" onChange={(event)=>setEmail(event.target.value)}  placeholder='Email'/> */}

                    <span className='span-i'><MdEmail/></span> 
                    {/* </div> */}
      
                </div>
             </div>

              <div className='registerbtnwrapper'>
                {/* <button type='submit' className='registerbtn' ></button> */}
                
               <Button1 type="submit" 
              className={`registerbtn ${formState.isFormValid ?'register-sucsess':'register-error' }`}
                
                 disabled={!formState.isFormValid}
                 >Register <FaUserPlus/></Button1>
              </div>

          </form>

          <h3 href=""    style={{fontSize: '1rem',
    marginTop: "1rem",
    fontFamily: 'Roboto'}} >if you dont have account, Please </h3>

    <Button1 className='loginbtnlink' to='/login'> Login</Button1>

        </div>
    )
}