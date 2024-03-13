
import React,{ createContext, useEffect, useReducer, useState } from "react";
import { json } from "react-router-dom";

export const contexData=createContext();


import {useLocalStorage} from "usehooks-ts";
 

export function ProviserItem({children}){
  let [theme , setTheme]=useLocalStorage('theme' ,'light')
let[isLogin , setIsLogin]=useState(false)
let[userInfo , setUserInfo]=useState([])
let[user , setUser]=useState([])
let [token , setToken]=useState(false)
  // let [theme , setTheme]=useState("light")


function login(data){
setUser([...user ,data])
// console.log(user)
// console.log(data)
setIsLogin(true)
localStorage.setItem('user' , JSON.stringify(user))
} 
 let new1=[];
useEffect(()=>{

  let dataSaveLocal= JSON.parse(localStorage.getItem('user')) ; 
  console.log(dataSaveLocal)

  if(dataSaveLocal){
setIsLogin(true)
  }else{
setIsLogin(false)
  }

},[login])
function logOut(userName , password){
  setToken(false)
  setUserInfo({})
  localStorage.removeItem('user')

}
    let [color2 , setColor2]=useState("#c7cbe4")
    let [show , setShow]=useState(false)
    return(
        <contexData.Provider value={{theme , setTheme  , setIsLogin, color2 , setColor2 , show , setShow , userInfo , isLogin ,
         login,logOut ,
        }} >
        {children}
      </contexData.Provider>
    )

}
