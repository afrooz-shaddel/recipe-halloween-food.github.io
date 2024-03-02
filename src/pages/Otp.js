import { useState , useEffect } from 'react'
import './otp.css'
import { useFetch } from '../hook/useFetch'
import AOS from 'aos';
export default function Otp(){
   
    let [phone , setPhone]=useState("");
    let [send , setSend]=useState(false);
    let [code , setCode]=useState(false);
    useEffect(() => {
        AOS.init({  duration : 2000});
      }, [])
   const submitPhoneHandeler=async(event)=>{
        event.preventDefault();
        const {postData , data  , error}=useFetch('http://localhost:3001/api/sms/send-code/' , 'POST')
       postData({phone})
console.log(response.ok)
    //    if(Response.ok===200){
    //          setSend(true)
    // //    }
      
    }
    const submitCode=async(event)=>{
     event.preventDefault();
     const {postData , data  , error}=useFetch('http://localhost:3001/api/sms/send-code/' , 'POST')
     postData({phone ,code: Number(code)})
    }
    return(
        <div>
           

           {!send ?<form action="" className='otpForm' onSubmit={submitPhoneHandeler}   data-aos="zoom-in" >
            <input type="number" className='otpForm-phoneinput' value={phone} onChange={(event)=>setPhone(event.target.value)} placeholder='Phone Number'   />
            <button type='submit' className='otpForm-btn' >send</button>
           </form> :
           <form action="" className='otpForm' onSubmit={submitCode} data-aos="zoom-in">
           <input type="number" className='otpForm-phoneinput' value={code} onChange={(event)=>setCode(event.target.value)} placeholder='Enter Code'   />
           <button type='submit' className='otpForm-btn'>send</button>
           <button  className='otpForm-btn2 ' onClick={()=>setSend(false)}>change phone Number</button>
          </form>

           }
        </div>

    )
}