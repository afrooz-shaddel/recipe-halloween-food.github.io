import './Login.css'
import { FaLockOpen } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { useState , useContext ,useEffect } from 'react'
// import './Register.css'
import { toast } from "react-toastify";
import { IoEnterSharp } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import InputComponent from './InputComponent/InputComponent';
import { useNavigate , Link } from 'react-router-dom'
import { useFetch } from '../hook/useFetch';
import {contexData}  from '../CreatContext2'
import Button1 from './Button1';
// import { useFetch } from "../hook/useFetch";
export default function Login(){
let navigate=useNavigate()
   let [userName , setUserName]=useState("");
   let [password , setPassword]=useState("")
   let[user , setUser]=useState([])
   const {data ,  isLoading , error}=useFetch('http://localhost:3000/user')
   let { userInfo , isLogin , login,logOut , setIsLogin}=useContext(contexData)
   let url='http://localhost:3000/user'
   let resulte=true; 
   let errorMassage="please enter the valid in  "
  
  

   function loginPage(event){
      event.preventDefault();

     if(validate()){
    
      fetch(" http://localhost:3000/user")
      .then(res=>res.json())
      .then(data=>  {
        data.map(item=>{if(item.userName===userName && item.password===password  ){
         // navigate("/")
         console.log("f")
        }}
      
        )
      })
     

        localStorage.setItem("data" , JSON.stringify(data))
      }
      else{
         resulte=false;
            console.log(errorMassage)
        
         errorMassage+='userName or password'
         toast.warning(errorMassage)
        reset()
      }
 
 

   }

   function reset(){
      setUserName("")
      setPassword("")
   
    }
   let validate=()=>{
    resulte=true;
      if(userName==="" ||  userName===null){
         resulte=false
         
         toast.warning("enter valid user")
      }

      if(password==="" ||  password===null){
         resulte=false
         toast.warning("enter valid password")
      }else if(password.length<6){
         resulte=false
         toast.warning('password length at least 6 character')
      }
      return true;
   }
    return(

        <div className='loginWrapper'>
          <form action="" className='register-form'>
             <h2 className='register-title'>Login</h2>
             <div className='register-formWrapper'>
                <div className='register'>
                   {/* <input className='register-input'value={userName}  onChange={(event)=>setUserName(event.target.value)} type="text" placeholder='userName' /> */}
                   <InputComponent  className="register-input"  type="text" element="input" placeholder={"userName"} />
                    <span className='span-i'><FaUser/></span> 
                </div>
                <div className='register'>
                <InputComponent  className="register-input"  type="password" element="input" placeholder={"password"} />
                   {/* <input className='register-input'value={password} onChange={(event)=>setPassword(event.target.value)} type="password"   placeholder='password'/> */}
                                      <span className='span-i'><FaLockOpen /></span> 
                </div>
             </div>
          
              <div className='registerbtnwrapper'>
               
                <Button1 type='submit' className='registerbtnlogin' onclick={loginPage} disabled={false}>login < CiLogin />  </Button1>
              </div>
              <h3 href=""    style={{fontSize: '1rem',
    marginTop: "1rem",
    fontFamily: 'Roboto'}} >if you dont have account, Please  <Button1 to="/register" className='loginbtnlink'> Register</Button1></h3>
          </form>
 
        </div>
    
    )
}


