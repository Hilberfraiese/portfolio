import stile from "./TextCard.module.scss"
import lenguajes from "./Lenguajes.png"

export function TextCard(){

    return(
    <div className={stile.container}>
     <ul class={stile.Text}>
        <li class={stile.TextLine}>
         <p>&nbsp;</p>
       <p>FULL STACK DEVELOPER</p>
       </li>
       <li class={stile.TextLine}>
            <p>FULL STACK</p>
       </li>
       <li class={stile.TextLine}>
        <p>DEVELOPER</p>
       </li>
       <li class={stile.TextLine}>
        <p> JAVASCRIPT</p>
       </li>
       <li class={stile.TextLine}>
        <p>REACT.js</p>
       </li>
       <li class={stile.TextLine}>
        <p>HTML</p>
        <p>CSS</p>
       </li>
       <li class={stile.TextLine}>
        <p>NODE.JS</p>
       </li>  
     </ul>
      <img className = {stile.img} src={lenguajes}/>
   </div> 
    )
    }

 