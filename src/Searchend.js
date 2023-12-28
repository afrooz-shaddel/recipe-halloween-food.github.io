import './searchend.css'
import { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import NewProduct1 from './component/NewProduct1';
import { useFetch } from './hook/useFetch';
import { BsFillSearchHeartFill} from "react-icons/bs";
import { TbCategory2 } from "react-icons/tb";
import { BiSolidCategory } from "react-icons/bi";
import {SearchItem} from './Handeler';
import { CategoriesItem1 } from './Handeler';
import { useSearchParams } from 'react-router-dom';


export default function Searchend(){
    const {data}=useFetch(' http://localhost:3000/recipes')
    let [product , setProduct]=useState([])
   let[search , setSearch]=useState("")
   let[query , setQuery]=useState({})
 let[searchParam , setSearchParam]=useSearchParams()


    useEffect(()=>{
   setProduct(data)
    },[data])

    useEffect(()=>{
        setSearchParam(query)
    let finalProduct=SearchItem(product , query.search)
    
    finalProduct=CategoriesItem1(finalProduct , query.categoryItem) 
      
    //    setProduct(cate)
    setProduct(finalProduct)
    }, [query])
    console.log(query.search)



let categoryItem="";
    function searchHandeler(event){
     
       
     setQuery(query=>({...query,search:event.target.value.toLowerCase().trim()}) )
    
          
    //     if(!dataSearch){
    //        setProduct([])
            
    //     }else{
            
    //         let item=data.filter(item=>item.title.toLowerCase().includes(search))
    //    setProduct(item)
    //     }

        SearchCate()
        
    }

    function clickHandeler(event){
    categoryItem=event.target.innerHTML.toLowerCase()
    setQuery(query=>({...query , categoryItem}))
   
    //    if(categoryItem==="all"){
    //     setProduct(data)
    //    }else{
    //   let data1=data.filter(item=>item.type===categoryItem)
    //   console.log(data1)
    //  setProduct(data1)
    //    }
    SearchCate()
    }

    function SearchCate(){
        // if(search){
            // let dataSearch=!!data.find(item=>item.title.toLowerCase().includes(search))
           
        //    if(!dataSearch){
        //     setProduct([])
        //    }
        //    else{
            // if( search.length && categoryItem){
               
            let data2=data.filter(item=> item.title.toLowerCase().includes(search.toLowerCase()))
            // setProduct(data2)
            // } else{ 

            // } 
            setProduct(data2)
            

           

        //    }

        // }
    }

    let category=[
        {id:1 , type:"All"},
        {id:2 , type:"Lunch"},
        {id:3 , type:"Drink"},
        {id:4 , type:"Sweets"},

    ]
    return(
        <div  className='search2'  >
        
        <div className='searchcategory' >
             
             <div className="search1"> <input type="text"  placeholder="Search"  onKeyUp={searchHandeler}
                className="searchInput1" />     <BsFillSearchHeartFill className="search-bs1" 
               
             />  </div>
             
             <div  className='categorywrapper'  >   <span><BiSolidCategory className='svgCategory'/>Categories</span> 
             <ul onClick={clickHandeler}  className='categorylist' >
                

                {category.map(item=> <li className={ item.type.toLowerCase()===query.categoryItem?'selected':null}>{item.type}</li>       )}
             </ul>
             </div>
        </div>

        <div>
            
       {product!==undefined && product.length? <NewProduct1  product={product} />:<p>no match</p>}   

        </div>


        </div>
    )
}