import { useState, useEffect } from "react";
import { useParams  } from "react-router-dom"
import { useFetch } from "../hook/useFetch";
import NewProduct1 from "../component/NewProduct1";
export default function Product(){
let {type}=useParams();
let [recipie , setRecipie]=useState([])

const {data ,  isLoading , error}=useFetch('https://api-json-server-two.vercel.app/recipes')


    let md=data.filter(item=>item.type.toLowerCase()==type.toLowerCase())

    return(
        <div>
        <NewProduct1  product={type==="All"?data :md}  />
        </div>
    )
}