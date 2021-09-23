import React, { useEffect, useState } from 'react';
import './swiperCard.css';


const SwiperCard = ({ proyect }) => {
  const [currentProyect, setCurrentProyect] = useState(proyect);
 

  useEffect(() => {
    setCurrentProyect(proyect);
  }, [proyect])
  console.log(proyect)
  console.log(currentProyect)

  return (
    <div className="swiper-card-container">
      <div className="aaa">
        <div className="bbb">
          <a href = {proyect.link} className="a">  
          <img src={proyect.src} className="swiper-card-spirit-image" />
           </a>
        </div>
      </div>
  </div>
  )
}
export default SwiperCard