
import './App.css';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import ForecastDay from "./forecastDay";

export default function ForecastInfo(props){
    const [loaded,setLoaded]=useState(false);
    const [forecastDay,setForecastDay]=useState(null);
    function showForecast(response){
      setForecastDay(response.data.daily);
      setLoaded(true);
    }
    useEffect(()=>{setLoaded(false)},[props.coord]);
    if (loaded){
        return(
        <div className="ForecastInfo d-none d-md-block">
        <hr className="mt-2 mb-4" />
         <div className="row">
          {forecastDay.map(function(dailyForecast,index){
            if (index > 0 && index < 7){
            return (
             <div className="col" key={index}>
               <ForecastDay data={dailyForecast} />
             </div>);}else {return null}
          })}
         </div>
        </div>
    );
    }else {
        let apiKey="af52e0b61c120c6390d319d4b6e5bb13";
        let lon=props.coord.lon;
        let lat=props.coord.lat;
        let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(showForecast);
        return null;
    }    
}