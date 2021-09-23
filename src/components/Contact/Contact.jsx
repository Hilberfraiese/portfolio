import Linkedin from "./Linkedin.png"
import Github from "./Github.png"
import gmail from "./gmail.png"
import stile from "./Contact.module.scss"
import {React} from "react"
import { Link, NavLink } from 'react-router-dom';

export function Contact(){

    return(
        <div>
        <div className={stile.container}>
            <h4 className={stile.subtitle}>CONTACTO</h4>
            <div className={stile.container2}>
                <div>
                <h5>Linkedin</h5>
                <a href="https://www.linkedin.com/in/hilber-fraiese">   
                <img  className={stile.img} src = {Linkedin} />
                </a>
                </div>
                <div>     
                <h5 className={stile.nombres}>GitHub</h5>
                <a href="https://github.com/Hilberfraiese">
                <img  className={stile.img2} src = {Github} />
                </a>
                </div>
                <div>    
                <h5 className={stile.nombres2}>Mail</h5>
                <a href = "mailto:hilberfraiese92@gmail.com">
                <img  className={stile.img3} src ={gmail} /> 
                </a>
                </div>
          </div>
        </div>
        </div>

    )
}