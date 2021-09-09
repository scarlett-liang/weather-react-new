import WeatherIcon from "./weatherIcon";

export default function ForecastDay (props){
    function day(){
        let date=new Date(props.data.dt * 1000);
        let days=["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat",];
        let day=date.getDay();
        return days[day];
    }
    return (
       <div className="ForecastDay">
           <div className="weekday">{day()}</div>
           <div className="mt-2 mb-2"><WeatherIcon code={props.data.weather[0].icon} size={30}/></div>
           <span className="forecastInfo-temp-max">{Math.round(props.data.temp.max)}º</span>
           <span className="forecastInfo-temp-min">{Math.round(props.data.temp.min)}º</span>
          </div>
    );
}