import {Title}  from "../title/Title"
import { TextContent } from "./TextContent/TextContent"
import { TextCard } from "../Text/TextCard"
import {Contact} from "../Contact/Contact"
import "./home.scss"
import skills from "./skills.png"
import arrow from "./arrow.gif"
import { Proyectos } from "../proyectos/Proyectos"

export function Home(){
  
  return(
   <div className="contenedorH">
   <meta name = "viweport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/> 
       <Title/>
       <img className= "gif" src={arrow}/>
       <TextCard/>
       <TextContent/>   
       <img className="img" src={skills}/>
       <Proyectos/>
       <Contact/>
  </div>
  )  


  
}