import "./Title.scss"
import { useState, useEffect } from "react";

export function Title(){

  const [spans,setSpans] = useState(document.querySelectorAll('.word span'))
  
  useEffect(()=>{
    setSpans(document.querySelectorAll('.word span'))
  },[])

  spans.forEach((span, idx) => {
   
    span.addEventListener('click', (e) => {

      e.target.classList.add('active');
    });
    span.addEventListener('animationend', (e) => {
      e.target.classList.remove('active');
    });
    
    // Initial animation
    setTimeout(() => {
      span.classList.add('active');
    }, 750 * (idx+1))
  });

  return(
    <div>
      <div className="word">
	      <span>H </span>
	      <span>I</span>
	      <span>L</span>
	      <span>B</span>
	      <span>E</span>
        <span>R</span>
        <a>.--.</a>
        <span>F</span>
	      <span>R</span>
	      <span>A</span>
	      <span>I</span>
	      <span>E</span>
        <span>S</span>
        <span>E</span>
      </div>
      <h3 className="subti">FULL STACK DEVELOPER</h3>  
    </div>
  )

}

