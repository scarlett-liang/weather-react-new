
import FormattedDate from "./formattedDate";
import WeatherIcon from './weatherIcon';
import TempConvert from './tempConvert';
import ForecastInfo from "./forecastInfo";
import './App.css';

export default function WeatherInfo (props){
    return(
        <div className="WeatherInfo">
         <h1>{props.data.city}</h1>
      <div className="row">
        <div className="col-md-5 img-fluid currentIcon"><WeatherIcon code={props.data.icon} size={56}/></div>
        <div className="col-md-7 currentWeather">
         <ul className="weatherDetail">
            <li>
                <TempConvert temp={props.data.temp} />
            </li>
            <li className="weatherDescri text-capitalize">{props.data.description}</li>
            
             <li>Humidity: <span>{props.data.humidity}</span>%</li>
             <li>Wind Speed: <span>{props.data.wind}</span>km/h</li>
             <li>Updated on <FormattedDate date={props.data.date}/></li>
            </ul>
        </div>
      </div>
      <hr className="mt-2 mb-4" />
      <ForecastInfo />
    </div>
    );
}