import { useEffect } from "react";
import { useState } from "react";

export default function Counter({number}){
    let [counte , setCounte]=useState(0);

    useEffect(()=>{
        let end=setInterval(()=>{
            setCounte(prevState=>prevState+1)
          },0.5)
          if(counte==number){
              clearInterval(end)
          }
          return ()=> clearInterval(end)
    },[counte])
 


    return(
       <span>{counte}</span> 
    )

}