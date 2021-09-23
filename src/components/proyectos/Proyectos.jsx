import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import stile from "./Proyectos.module.scss"
import SwiperCard from "./SwiperCard"
import "./swiperOs.css"
import dog from "./huellas.png"
import otr from "./ort.png"
import weather from "./weather.png"
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

export function Proyectos(){

 let array = [
 {link:"https://on-the-rocks-orcin.vercel.app",src: otr, name: "On The Rocks"},
 {link:"https://github.com/Hilberfraiese/Dogs-App",src: dog, name:"Dogs App"},
 {link:"https://github.com/Hilberfraiese/WeatherApp",src: weather, name:"Weather App"}]  
  return(
  <div>
  <h1 className={stile.subtitle}>PROYECTOS</h1>
  <h5 className={stile.subtitle2}>Desliza</h5>
  <Swiper
      className="swiper"
      slidesPerView={1}
     
      spaceBetween={1}
      pagination={true}
      loop={true}
      autoplay={{
      delay: 6000,}}>

 { array.map((proyect)=>(
    <SwiperSlide key = {proyect.name}>
       <h2 className={stile.subtitle3}>{proyect.name}</h2>
      <SwiperCard proyect={proyect} />
    </SwiperSlide>
  ))
 }  

</Swiper>
  </div>   
  )  
}