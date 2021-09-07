import {useState} from 'react';
import "./App.css";

export default function TempConvert(props){
    const [unit, setUnit]=useState("celsius");
    function showFahren(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }
    if(unit==="celsius"){
    return(
        <div className="TempConvert">
            <span className="temperature">{Math.round(props.temp)}</span>
            {" "}<span className="unit">ºC | <a href="/" onClick={showFahren}>ºF</a></span>
        </div>
    );
    }else{
        let fahrenTemp=Math.round(props.temp * 9 /5 + 32);
       return(
        <div className="TempConvert">
            <span className="temperature">{fahrenTemp}</span>
            {" "}<span className="unit"><a href="/" onClick={showCelsius}>ºC</a> | ºF</span>
        </div> );
    }
} 