import { useState ,useEffect } from "react";
import { toast } from "react-toastify";

export function useFetch(url , method="GET"){

const [data , setData]=useState([])

const [error , setError]=useState(null);
const [isLoading , setIsLoading]=useState(false);
const [options , setOptions]=useState(null)
const postData=(postData)=>{
  setOptions({
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(postData)
    
  })
 
}

useEffect(()=>{

   const dataFetch=async(options)=>{
    setIsLoading(true)
    try{

        let response=await fetch(url ,{...options})

        if(!response.ok){
          throw new Error(response.statusText)
        }

        let json=await response.json()
     
        setIsLoading(false)
         setError(null)
         setData(json)
     

    }catch(err){
        setIsLoading(false)
         setError(err.message)
      
    }
    
   }
   if(method==="GET"){
    dataFetch()
   }
   if(method==="POST" && options){
    dataFetch(options)
    toast.success("success")
   }
  
  
},[url , method ,  options ])
return{data , isLoading , error , postData}

}