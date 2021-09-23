import stile from "./TextCard.module.scss"
import lenguajes from "./Lenguajes.png"

export function TextCard(){

    return(
    <div className={stile.container}>
     <ul className={stile.Text}>
        <li className={stile.TextLine}>
         <p>&nbsp;</p>
       <p>FULL STACK DEVELOPER</p>
       </li>
       <li className={stile.TextLine}>
            <p>FULL STACK</p>
       </li>
       <li className={stile.TextLine}>
        <p>DEVELOPER</p>
       </li>
       <li className={stile.TextLine}>
        <p> JAVASCRIPT</p>
       </li>
       <li className={stile.TextLine}>
        <p>REACT.js</p>
       </li>
       <li className={stile.TextLine}>
        <p>HTML</p>
        <p>CSS</p>
       </li>
       <li className={stile.TextLine}>
        <p>NODE.JS</p>
       </li>  
     </ul>
      <img className = {stile.img} src={lenguajes}/>
   </div> 
    )
    }

 