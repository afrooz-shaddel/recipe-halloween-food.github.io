import './plot.css'
export default function PoletColor({clicked , color}){
  
    return(
        <div>
        
            <button  className="plotColorbtn" style={{backgroundColor: color}} onClick={clicked}></button>
        
        </div>
         

    )
}