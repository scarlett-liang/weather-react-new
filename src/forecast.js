
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import WeatherInfo from './weatherInfo';



import './App.css';

export default function Forecast (props){
    
  const [weatherData,setWeatherData]=useState({ready:false});
  const[city,setCity]=useState(props.defaultCity);
  function showTemp (response){
    setWeatherData({
    ready:true,
    city: response.data.name,
    date: new Date(response.data.dt * 1000),
    temp: response.data.main.temp,
    wind: response.data.wind.speed,
    humidity: response.data.main.humidity,
    description: response.data.weather[0].description,
    icon: response.data.weather[0].icon,
  });
  
  }
function search(){
    let apiKey="af52e0b61c120c6390d319d4b6e5bb13";
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemp);
}
function handleSubmit(event){
    event.preventDefault();
    search();
}
function handleChange(event){
setCity(event.target.value);
}
  if(weatherData.ready){
  return (
    <div className="Forecast">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="City name?" className="cityInfo" onChange={handleChange} autoFocus="on"/>
        <input type="submit" value="Search" className="searchButton" />
        <input type="submit" value="Auto Locate" className="autoButton" />
      </form>
      <WeatherInfo data={weatherData} />
    </div>
  );}else{
      search();
      return (
    <div className="Forecast">
      <form>
        <input type="text" placeholder="City name?" className="cityInfo" />
        <input type="submit" value="Search" className="searchButton" />
        <input type="submit" value="Auto Locate" className="autoButton" />
      </form>
      <h1><Loader type="Rings" color="#000000" height={60} width={60} /><br />Loading...</h1>
    </div>);

  }
}