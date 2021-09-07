

export default function FormattedDate(props){
  let hour = props.date.getHours();
  let minute=props.date.getMinutes();
  let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
  let day=days[props.date.getDay()];
  if(hour<10){
      hour=`0${hour}`;
  }
  if(minute<10){
      minute=`0${minute}`;
  }
  return (
      <span>{day} {hour}:{minute}</span>
  );
}