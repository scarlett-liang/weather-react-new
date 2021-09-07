
import FormattedDate from "./formattedDate";
import Sunny from "./image/sunny.svg";
import Cloudy from "./image/cloudy.svg";
import WeatherIcon from './weatherIcon';
import TempConvert from './tempConvert';
import './App.css';

export default function WeatherInfo (props){
    return(
        <div className="WeatherInfo">
         <h1>{props.data.city}</h1>
      <div className="row">
        <div className="col-md-5 img-fluid currentIcon"><WeatherIcon code={props.data.icon}/></div>
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
      <div className="row">
        <div className="col-md-2 ">
          <img src={Sunny} alt="sunny" />
          <div>Tues</div>
          20ºC
        </div>
        <div className="col-md-2">
          <img src={Cloudy} alt="cloudy" />
          <div>Wed</div>
          25ºC
        </div>
        <div className="col-md-2">
          <img src={Sunny} alt="sunny" />
          <div>Thur</div>
          26ºC
        </div>
        <div className="col-md-2">
          <img src={Sunny} alt="sunny" />
          <div>Fri</div>
          28ºC
        </div>
        <div className="col-md-2">
          <img src={Cloudy} alt="cloudy" />
          <div>Sat</div>
          22ºC
        </div>
        <div className="col-md-2">
          <img src={Cloudy} alt="cloudy" />
          <div>Sun</div>
          20ºC
        </div>
      </div>
        </div>
    );
}