import FormattedDate from "./formattedDate";
import WeatherIcon from './weatherIcon';
import TempConvert from './tempConvert';
import './App.css';

export default function WeatherInfo (props){
    return(
        <div className="WeatherInfo">
         <h1>{props.data.city}</h1>
      <div className="row">
        <div className="col-md-5 img-fluid currentIcon"><WeatherIcon code={props.data.icon} size={78}/></div>
        <div className="col-md-7 currentWeather">
         <ul className="weatherDetail">
            <li className="weatherList">
                <TempConvert temp={props.data.temp} />
            </li>
            <li className="weatherDescri text-capitalize weatherList">{props.data.description}</li>
            
             <li className="opacity60 weatherList">Humidity: <span>{props.data.humidity}</span>%</li>
             <li className="opacity60 weatherList">Wind Speed: <span>{props.data.wind}</span>km/h</li>
             <li className="opacity60 weatherList">Updated on <FormattedDate date={props.data.date}/></li>
            </ul>
        </div>
      </div>
      </div>
    );
}