import './cart.css';
import { useEffect } from 'react';
import './fonts/fonts.css'
import AOS from 'aos';
import Header from './Header/Header';

export default function Cart(){
    useEffect(() => {
        AOS.init({  duration : 2000});
      }, [])
     
    return(
      <>
      {/* <p>Services</p> */}
      <Header item="S E R V I C E S"/>
        <div className='cartWrapper '>
        <div className="linkpicture " data-aos="fade-up"  >
        <img src="\icon\ghosts 1 .jpg" alt="" />
        <p className="linkpicture-title">design food for kids</p>
        <p className='linkpicture-dis'>Easy Halloween Party Food Ideas</p>
          </div>
          <div className="linkpicture" data-aos="fade-up" >
        <img src="\icon\halloween_dinos_copy.webp" alt="" />
        <p className="linkpicture-title"> Healthy Halloween </p>
        <p className='linkpicture-dis'> 10 Easy and Healthy Treats!</p>
          </div>
        <div className="linkpicture right" data-aos="fade-up" >
        <img src="\gift\images (3).jpg" alt="" />
        <p className="linkpicture-title">Quick & Easy </p>
        <p className='linkpicture-dis'>Quick & Easy Halloween Treats 
</p>
          </div>
    
      
      
      </div>
      </>
    )
}