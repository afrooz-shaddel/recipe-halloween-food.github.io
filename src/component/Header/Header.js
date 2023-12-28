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
        <>
         <div className='headertext'  data-aos="fade-up" >       
          {splitText.map((item ,index)=>(
                <span  key={index}>{item}</span>

        ))}
          </div>
        </>
    )

}