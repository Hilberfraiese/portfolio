import "animate.css"
import stile from "./TextContent.module.scss"
import about from "./About.png"

export function TextContent(){

    return(
    <div className={stile.contenedor}>
      <img className = {stile.img} src = {about}/>
    <div className = {stile.container}>
     <div className={stile.card}>
	  <h2 className={stile.entryTitle}>
      <a >Hola! Mi nombre es Hilber Fraiese. <br/> Soy Full Stack Developer, graduado del bootcamp Soy Henry. <br/> Me considero una persona que disfruta el aprendizaje constante, los desafíos y el trabajo en equipo.</a>
    </h2>
    </div>
    </div>
    
    </div>

    )

    }