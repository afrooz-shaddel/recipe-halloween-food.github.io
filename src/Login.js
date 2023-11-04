// import { useEffect, useState } from 'react'
// import './login.css'
// import {validate2} from  './validate2';
// import { ToastContainer, toast } from 'react-toastify';
// import {notify} from './tost'
// import { Link } from 'react-router-dom';
// export default  function  Login(){


//     const[data , setData]=useState({
      
//         email:"",
      
//         password:"",
   

//     })

//     const [errors , setErrors]=useState({})
//     const[touch , setTouch]=useState({})
//     const[user , setUser]=useState([])
//     function changeHandeler(e){
        
//       if(e.target.name==="checked"){
//      setData({...data , [e.target.name]:e.target.checked})
//       }
//       setData({...data , [e.target.name]:e.target.value})
//     }
//  function focusHandeler(e){
//     setTouch({...touch ,[e.target.name]:true})
   
//  }
 
//    useEffect(()=>{
//       setErrors(validate2(data))

//    } ,[data , touch]

//    )


//    function submitHandeler(event){
//      event.preventDefault();
   

//      if(!Object.keys(errors).length){
//        notify("success" , "greet")
//      }else{
//         setTouch({
         
//             email:true,
          
//             password:true,
        
//         })
//         notify("error","no no " )
//      }

   


//    }


   
 
 

   
//     return(
        
//         <div>

//         <div className='form-item'>

//             {/* {allData?<div>befarma</div>:""} */}
          
//             <h1 className='text-sign'>login</h1>
//             <form onSubmit={submitHandeler}  >
          
//                <label htmlFor="">Email</label>
//                <input className='input-form' type="text"  value={data.email} name="email"onChange={changeHandeler} onFocus={focusHandeler} />
//                {errors.email  && touch.email && <div>{errors.email}</div> }

//                <label htmlFor="">Password</label>
//                <input className='input-form' type="password"  value={data.password} name="password"onChange={changeHandeler}  onFocus={focusHandeler} />
//                {errors.password  && touch.password && <div>{errors.password}</div> }
               
              
             

//                <div  className='loginbutton'>
              
//                 <button className='btnSing' type='submit'   >Login</button>
               
//                 <Link to="/sign"  className='linkSign'> Sign Up</Link>
//                </div>
//             </form>

//         </div>

//    <ToastContainer/>
      
// </div>
//     )
// }