 import './create.css'
 import Alert from 'react-bootstrap/Alert'
import { useNavigate } from 'react-router-dom';
import {useFetch} from '../hook/useFetch'
 import { useEffect, useState } from 'react';
 import Toast from 'react-bootstrap/Toast';
import { SpaRounded } from '@mui/icons-material';
import ScrollToTop from '../component/ScrollToTop';
 export default function Create(){
    let navigate=useNavigate()
    let [title , setTitle]=useState('');
    let [method , setMethod ]=useState('');
    let [cookingTime , setCookingTime ]=useState('');
    let [img ,setImg]=useState("")
    let [submit , setSubmit]=useState(false)
    let[imageUpload , setImageUpload]=useState("")
    let[type , setType]=useState("please select")
    let[previewImage ,setPreviewImage ]=useState("")
    let [newIngredient ,setNewIngredient]=useState("")
    let [ingredients  ,setIngredients ]=useState([])
    let [valid ,setValid]=useState(false)
    const {postData , data  , error}=useFetch('http://localhost:3000/recipes' , 'POST')
    let options=["please select"  , "drink" , "sweets" , "lunch"]
let exceptThisSymbols=["e" , "E" , "+" , "-" , "."]
  function submitHandeler(e){
    e.preventDefault();
    setSubmit(true)
    
    if(title.length>0 && method.length>0 && cookingTime.length>0 &&   ingredients.length>1 && type!=="please select" ){
      postData({title , ingredients, method , cookingTime:cookingTime+'minute'    , img:"/hollowin/default2.jfif" ,type })
      setValid(true)

      setTimeout(() => {
    
   
        navigate("/")
        
    
    
      }, 4000);
     
    }
      else{
        setValid(false)
      }
      
   

    }
  function reset(){
    setCookingTime("")
    setTitle("")
    setMethod ("")
    setType("please select")
    setIngredients([])
  }

 

function submitbtnHandeler1(e){
    e.preventDefault();
 if(ingredients  &&  !ingredients.includes(newIngredient)){
    setIngredients ( prevState=> [...prevState,(newIngredient)])
}
else{

}
    setNewIngredient("")
  
  }


    return(
      <>
     {  valid && <div  className='successMassege'> success ! Thank you</div>} 
     <div className='circle'></div>
        <div className='Create'>
             
                
              
                 <form  className='createForm'   onSubmit={submitHandeler} >
                 <p className='createForm__title' >Add New Recipe</p>
                <div  className='formInput'>
                     
                      <input type="text"  placeholder=" title" onChange={(e)=>setTitle(e.target.value)}  value={title}  />

                </div>
             { submit && title.length===0 && <span className='textunder'>please Enter a title of food</span>}
       
                <div  className='formInput'>
                    
                     <input type="text"  placeholder=" method" onChange={(e)=>setMethod(e.target.value)}  value={method}  />   
                     
                </div>
                { submit && method.length===0  && (<span className='textunder'>please Enter a Method of food</span>)}  
            
                  <div  className='formInput'>
                     <input type="number"  placeholder=" Time"  onChange={(e)=>setCookingTime(e.target.value) }  onKeyDown={e=>exceptThisSymbols.includes(e.key)&& e.preventDefault()}   
                      value={cookingTime}/>

                    </div>
                    {submit && cookingTime.length===0  &&( <span className='textunder'>please Enter a  cookingTime of food</span>)}  
                  <div className='formInput'>
                    <select name="" id=""  value={type} onChange={(e)=>setType(e.target.value)}>
               {options.map(item=>(
                <option value={item}>{item}</option>
               ))}
              </select>
              </div>
              {submit && type=="please select"  &&( <span className='textunder'>please Enter a  type of food</span>)}
           
            <div  className='formInput formIngredient'>
              
               
                    <input type="text"   onChange={(e)=>setNewIngredient(e.target.value)} value={newIngredient} placeholder='ingredient'   />
                    <button  type='submit'  className='addbtn' onClick={submitbtnHandeler1}>Add</button>
                    
         
                    </div>
                <ul  className="ingredientList">
       <span> ingredient:</span> { ingredients.map(item=><li className='itemIngredients'   key={item}>{item}</li>)}
                
                  
                   </ul>
            
         { submit && ingredients.length<2 && ( <span className='textunder'>please Enter ingredients of food</span>)}

        
             
             
                <button type='submit'  className='btnRecipe'>Add </button>
            
 

            </form>
            <div className='login-img'>
              <img src="\nw\halloween-foods-scaled.jpg" alt=""   />
     
            </div> 
           
       

           
        </div>
        </>
    )
}