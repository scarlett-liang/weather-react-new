
import './App.css';
import axios from "axios";
import React, { useState } from 'react';
import ForecastDay from "./forecastDay";

export default function ForecastInfo(props){
    const [loaded,setLoaded]=useState(false);
    const [forecastDay,setForecastDay]=useState(null);
    function showForecast(response){
      console.log(response.data.daily[0]);
      setForecastDay(response.data.daily);
      setLoaded(true);
    }
    if (loaded){
        return(
        <div className="ForecastInfo">
         <ForecastDay data={forecastDay[0]} />
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