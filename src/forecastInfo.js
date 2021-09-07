import WeatherIcon from "./weatherIcon";
import './App.css';

export default function ForecastInfo(){
    return(
        <div className="row">
         <div className="col-md-2 ">
          <div>Tues</div>
          <WeatherIcon code="01d" size={30}/>
          <span className="forecastInfo-temp-max">20º</span>
          <span className="forecastInfo-temp-min">10º</span>
         </div>
        </div>
    );
}