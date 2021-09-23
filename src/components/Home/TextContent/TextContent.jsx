import "animate.css"
import stile from "./TextContent.module.scss"
import about from "./About.png"

export function TextContent(){

    return(
    <div class={stile.contenedor}>
      <img class = {stile.img} src = {about}/>
    <div class = {stile.container}>
     <div class={stile.card}>
	  <h2 class={stile.entryTitle}>
      <a >Hola! Mi nombre es Hilber Fraiese. <br/> Soy Full Stack Developer, graduado del bootcamp Soy Henry. <br/> Me considero una persona que disfruta el aprendizaje constante, los desafíos y el trabajo en equipo.</a>
    </h2>
    </div>
    </div>
    
    </div>

    )

    }