import './Login.css'
import { useState } from 'react'
// import './Register.css'
import { toast } from "react-toastify";

import { useNavigate , Link } from 'react-router-dom'
import { useFetch } from '../hook/useFetch';
export default function Login(){
let navigate=useNavigate()
   let [userName , setUserName]=useState("");
   let [password , setPassword]=useState("")
   let url='http://localhost:3000/user'
   let resulte=true; 
   let errorMassage="please enter the valid in  "
   const {data ,  isLoading , error}=useFetch(url);
   function loginPage(event){
      event.preventDefault();

     if(validate()){
    data.map(item=>{
      if(item.userName===userName && item.password===password){
         
           toast.success("success");
           navigate("/")

         
      }
      else{
         resulte=false;
            
         errorMassage +="userName"
      }
    })
 

   }}

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
      // <div className='modal_wrapper'>
        <div className='loginWrapper'>
          <form action="" className='register-form'>
             <h2 className='register-title'>Login</h2>
             <div className='register-formWrapper'>
                <div className='register'>
                   <label htmlFor="" className='register-labelusername'>UserName*</label>
                   <input className='register-input'value={userName}  onChange={(event)=>setUserName(event.target.value)} type="text" />
                </div>
                <div className='register'>
                   <label className='register-labelpassword' htmlFor="">Password*</label>
                   <input className='register-input'value={password} onChange={(event)=>setPassword(event.target.value)} type="password"  />
                </div>

             
             </div>
          
              <div className='registerbtnwrapper'>
                <button type='submit' className='registerbtnlogin' onClick={loginPage} >login</button>
                
              </div>
              <h3 href=""    style={{fontSize: '1rem',
    marginTop: "1rem",
    fontFamily: 'Roboto'}} >if you dont have account, Please  <Link to="/register" className='loginbtnlink'> Register</Link></h3>
          </form>
 
        </div>
      //   </div>
    )
}