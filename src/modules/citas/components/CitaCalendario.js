import React,{useState} from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';


const CitaCalendario = () => {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };
  return (
    <>
      <Calendar onChange={onChange} value={date} />
      {console.log(date)}
      {date.toString()}
    </>
  );
};

export default CitaCalendario;
