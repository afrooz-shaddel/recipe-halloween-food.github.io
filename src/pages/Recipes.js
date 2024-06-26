import { useParams } from "react-router-dom";
import { useFetch } from "../hook/useFetch";
import { BiCheck} from "react-icons/bi";
import { BiSolidTimeFive} from "react-icons/bi";
import './recipes.css';
import { useState } from "react";
import { useEffect } from "react";
import { BsTypeH1 } from "react-icons/bs";
export default function Recipes(){
  const[btnShow , setBtnShow]=useState(false)
    const {id}=useParams()
    // let url=`https://recipefood-json-server.liara.run/recipes/${id}`
    let url=`https://api-json-server-two.vercel.app/recipes/${id}`
    
    const {data ,  isLoading , error}=useFetch(url);
    
    const[allData , setAllData]=useState(data)

    useEffect(()=>{
   setAllData(data)
    },[data])
   
    return(<>
        { 
        data &&(
         
            <div  className="wrapperBackground5" key={data.id}>
                    <p className="recepi-title">{data.title}</p>
            {error  &&  <p >{error}</p>}
            {isLoading  && <p>..is</p>}
            {data!==undefined &&  
            <div className="background6">
          <div className="recipe-img-title">
          {
       data.img && 
        
        <div className="recipie-img">
        <img src={data.img} className="img-fluid1" alt="" width={"400px"}/>
        </div>
         
      } 
        
      <p className="recipe-method1">This easy Halloween cake recipe is ideal for a last-minute party as it's simply a matter of decorating two ready-made Victoria sponge cakes with black icing and this slimy white chocolate 'drip'. The black and green icings create a dramatic effect that guests will love, and it tastes delicio This easy Halloween cake recipe is ideal for a last-minute party as it's simply a matter of decorating two ready-made Victoria sponge cakes with black icing and this slimy white chocolate 'drip'. The black and green icings create a dramatic effect that guests will love, and it tastes delicio</p>
          </div>



<p className="recepi-time  center"> <BiSolidTimeFive /> :  {data.cookingTime}</p> 
<p className="recipe-method">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, fuga aperiam? Unde libero ipsam tenetur necessitatibus magni officia sint debitis blanditiis aliquam quaerat. Velit, corporis autem. Nesciunt voluptate ullam officiis?</p>
           
              
               
              

              
               
             
     

            <p className="recepi-ingredient center">what ingredients do i need for {data.title}?</p>
     
      {allData.ingredients && allData.ingredients!==undefined &&  (<ul>{allData.ingredients.map(item=>(
              <li className="ingredients-item"> <BiCheck  className="color"/>{item}</li>
            ))}</ul>)}
            <p className="recipe-method center">{data.method}</p>
        </div>
       } 
      </div>) }

</> )
}


