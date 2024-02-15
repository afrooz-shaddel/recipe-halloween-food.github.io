import './searchend.css'
import { useEffect, useState } from 'react';

import NewProduct1 from './component/NewProduct1';
import { useFetch } from './hook/useFetch';
import { BsFillSearchHeartFill} from "react-icons/bs";
import { TbCategory2 } from "react-icons/tb";
import { BiSolidCategory } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import {SearchItem} from './Handeler';
import { CategoriesItem1 } from './Handeler';
import { useSearchParams } from 'react-router-dom';
import Categories from './Category/Modal';
import Menu from './component/Menu'
import { MdCategory } from "react-icons/md";
import Modal from './Category/Modal';
import { CiSearch } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";

export default function Searchend(){
    const {data}=useFetch('http://localhost:3000/recipes')

    let category2= new Set(data.map(item=>(item.type)));
    let category21=["All" ,...category2] 
    
    let [product , setProduct]=useState([])
   let[search , setSearch]=useState("")
   let[query , setQuery]=useState({})
   const[filter , setFilter]=useState(false)
 let[searchParams , setSearchParams]=useSearchParams()



    useEffect(()=>{
   setProduct(data)
   let query={};
   const categoryItem=searchParams.get("categoryItem")
   const search=searchParams.get("search")
  
   if(search) query.search=search
     if(categoryItem) query.categoryItem=categoryItem
     setQuery(query)
    },[data])

    useEffect(()=>{
        setSearchParams(query)
    let finalProduct=SearchItem(product , query.search)
    
    finalProduct=CategoriesItem1(finalProduct , query.categoryItem) 
      
    //    setProduct(cate)
    setSearch(query.search || "")
    setProduct(finalProduct)
    }, [query])
 



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
        
            setProduct(data2)
            

           

    }
  


    return(
        <div  className='search2'  >
        
        <div className='searchcategory' >
             
             {/* <div className="search1"> <input type="text"  placeholder="Search"  onKeyUp={searchHandeler}
                className="searchInput1" />     <BsFillSearchHeartFill className="search-bs1" 
               
             />  </div> */}
             {/* <div className='inputSearch'>
             
             <input type="text" placeholder='Type here...' onKeyUp={searchHandeler}/>
            <label htmlFor=""> <FaSearch/> </label>
           </div> */}


         
              




<div className='inputSearch'>
             
             <input type="text" placeholder='Type here...' onKeyUp={searchHandeler}/>
            <label htmlFor=""> <FaSearch/> </label>
           </div>
             
             <div  className='categorywrapper'  >   <span><BiSolidCategory className='svgCategory'/>Categories</span> 
             <ul onClick={clickHandeler}  className='categorylist' >
                <Menu allMenu={category21}  query1={query} categoy={categoryItem}/>

                {/* {category.map(item=> <li className={ item.type.toLowerCase()===query.categoryItem?'selected':null}>{item.type}</li>       )} */}
             </ul>
             </div>
             <div className='mobilea' >
                {/* <div className='mobilename1'>
             <p className='mobilename'>Filter& Search</p>
             </div> */}
              <div className='mobilSearch-category'>
               
            
             {/* <div className='mobilCategory' onClick={()=>{
                setFilter(true)
             }}><span> <MdCategory  className='svgCategory' />Filter</span>
            
           

           
           
             </div> */}
             <Modal    allMenu={category21}  close={setFilter}  filter={clickHandeler}  query1={query} categoy={categoryItem} />
            
             </div>
             </div>
        </div>

        <div>
            
       {product!==undefined && product.length? <NewProduct1  product={product} />:<p>no match</p>}   

        </div>


        </div>
    )
}