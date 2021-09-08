import ForecastDay from './forecastDay';
import './App.css';
import axios from "axios";
import {useState} from 'react';

export default function ForecastInfo(props){
    const [forecastTemp,setForecastTemp]=useState({loaded:false});
    const [loaded,setLoaded]=useState(false);
    function showForecast(response){
        setForecastTemp(response.data.daily);
        setLoaded(true);
    }
    if(loaded){
        return(
        <ForecastDay data={forecastTemp[1]} />
        );     
    }else {
        let apiKey = "af52e0b61c120c6390d319d4b6e5bb13";
        let longitude = props.coord.lon;
        let latitude = props.coord.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(showForecast);
        return null; 
    }
}