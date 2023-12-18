import './header.css';
import AOS from 'aos';
import { useEffect } from 'react';
export default function Header({item}){
    let man=item;
    let splitText=man.split(" ")
    useEffect(() => {
        AOS.init({  duration : 2000});
      }, [])
    return(
        // <div className='headerMD'>
        // <span>G</span>
        // <span>A</span>
        // <span>L</span>
        // <span>L</span>
        // <span>E</span>
        // <span>R</span>
        // <span>Y</span> 
        
        
        // </div>
        <>
 <div className='headerMD'  data-aos="fade-up" >       
  {splitText.map((item ,index)=>(
            
           
                <span key={index}>{item}</span>

          
        ))}
          </div>
        </>
    )

}