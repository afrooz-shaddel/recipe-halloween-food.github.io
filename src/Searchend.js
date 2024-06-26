import './searchend.css'
import { useEffect, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import NewProduct1 from './component/NewProduct1';
import { useFetch } from './hook/useFetch';
import { BsFillSearchHeartFill} from "react-icons/bs";
import { TbCategory2 } from "react-icons/tb";
import { BiSolidCategory } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import {SearchItem} from './Handeler';
import Loader from './component/Loader';
import Loder from './Loder/Loder';
import { CategoriesItem1 } from './Handeler';
import { useSearchParams } from 'react-router-dom';
// import Categories from './Category/Modal';
import Menu from './component/Menu'
import { MdCategory } from "react-icons/md";
import Modal from '../src/component/Category/Modal'
import { CiSearch } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import HeaderType1 from './component/HeaderType/HeaderType';

export default function Searchend(){
    const {data}=useFetch('https://api-json-server-two.vercel.app/recipes')

    let category2= new Set(data.map(item=>(item.type)));
    let category21=["All" ,...category2] 
    
    let [product , setProduct]=useState([])
   let[search , setSearch]=useState("")
   let[query , setQuery]=useState({})
   const[filter , setFilter]=useState(false)
   const[menu , setMenu]=useState(false)
 let[searchParams , setSearchParams]=useSearchParams()

 const [currentPage, setCurrentPage] = useState(1);
 const [paginatedTodos, setPaginatedTodos] = useState([]);

 let pageSize = 4;
  let pagesNumbers;
 useEffect(()=>{
    let endIndex = pageSize * currentPage;
    let startIndex = endIndex - pageSize;
    let allShownTodos = data.slice(startIndex, endIndex);
    setPaginatedTodos(allShownTodos);
 },[data])

function categoryList(){
  setMenu(!menu)
}


    useEffect(()=>{
   setProduct(paginatedTodos)
   let query={};
   const categoryItem=searchParams.get("categoryItem")
   const search=searchParams.get("search")
  
   if(search) query.search=search
     if(categoryItem) query.categoryItem=categoryItem
     setQuery(query)
    },[paginatedTodos])

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
    
          
 

        SearchCate()
        
    }
    useEffect(() => {
        let endIndex = pageSize * currentPage;
        let startIndex = endIndex - pageSize;
        let allShownTodos = data.slice(startIndex, endIndex);
        setPaginatedTodos(allShownTodos);
      }, [currentPage]);
    
      const changePaginate = (newPage) => {
        setCurrentPage(newPage);
      };

    
    function clickHandeler(event){
    categoryItem=event.target.innerHTML.toLowerCase()
    setQuery(query=>({...query , categoryItem}))
   
  
    SearchCate()
    }

    function SearchCate(){
        
               
            let data2=paginatedTodos.filter(item=> item.title.toLowerCase().includes(search.toLowerCase()))
            // let data2=paginatedTodos.filter(item=> console.log(item.title.toLowerCase().includes(search.toLowerCase())))
           setProduct(data2)

           console.log(product)
            

        

    }

   
    const pagesCount = Math.ceil(data.length / pageSize);
    pagesNumbers = Array.from(Array(pagesCount).keys());

    let LinksItem=[{id:1 , title:<FaHome/> ,to:"/"},
{id:2 , title:"Recipes" ,to:"/search"}
]
    return(

      <>
      
  
 <HeaderType1  links={LinksItem}  />
     
        <div  className='search2'  >
        
         <div className='searchcategory' >
            
           <div className='inputSearch'>
             
             <input type="text" placeholder='Type here...' onKeyUp={searchHandeler}/>
            <label htmlFor=""> <FaSearch/> </label>
           </div>
             
             <div  className='categorywrapper'  >   <span  onClick={categoryList} >    Categories  <IoIosArrowDown  /> </span> 
            {menu &&  <ul onClick={clickHandeler}  className='categorylist' >
                <Menu allMenu={category21}  query1={query} categoy={categoryItem} close1={categoryList}/>

               
             </ul>}
             </div>
             <div className='mobilea' >
              
              <div className='mobilSearch-category'>
               
            

        
             <Modal    allMenu={category21}  close={setFilter}  filter={clickHandeler}  query1={query} categoy={categoryItem} close1={categoryList} />
            
             </div>
             
             </div>
        </div> 

        <div>
            
       {data!==undefined && data.length? <NewProduct1  product={product} />:<Loder/>}   

        </div>


        <nav className="d-flex justify-content-center pagination">
        <ul className="pagination" aria-current="page">
          {pagesNumbers.map((pageNumber) => (
            <li
              style={{ cursor: "pointer" }}
              className={
                pageNumber + 1 === currentPage
                  ? "page-item active"
                  : "page-item"
              }
              key={pageNumber + 1}
              onClick={() => changePaginate(pageNumber + 1)}
            >
              <span className="page-link">{pageNumber + 1}</span>
            </li>
          ))}
        </ul>
      </nav>

{/* <img className='searchImgBack1'   src="\shape\shape-2.png" alt="" />
<img src="\shape\shape-1.png" alt="" className='searchImgBack2'/> */}

        </div>
        </>
    )
}