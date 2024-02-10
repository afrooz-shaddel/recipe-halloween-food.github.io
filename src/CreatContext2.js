
import React,{ createContext, useReducer, useState } from "react";

export const contexData=createContext();




export function ProviserItem({children}){
    // let {state , dispatch}=useReducer(ItemState , initial)
    let [theme , setTheme]=useState("light")
    let [color2 , setColor2]=useState("#c7cbe4")
    let [show , setShow]=useState(false)
    return(
        <contexData.Provider value={{theme , setTheme  , color2 , setColor2 , show , setShow}} >
        {children}
      </contexData.Provider>
    )

}
