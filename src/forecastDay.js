import WeatherIcon from "./weatherIcon";

export default function ForecastDay(props){
    function day(){
        let date=new Date(props.data.dt);
        let days=["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat",];
        let day=date.getDay();
        return days[day];
    }
    return(
        <div className="row">
         <div className="col-md-2 ">
          <div>{day()}</div>
          <WeatherIcon code={props.data.weather[0].icon} size={30}/>
          <span className="forecastInfo-temp-max">{Math.round(props.data.temp.max)}º</span>
          <span className="forecastInfo-temp-min">{Math.round(props.data.temp.min)}º</span>
         </div>
        </div>
    );
}