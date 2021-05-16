import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";

const Calendar_client = () => {
const [startDate, setStartDate] = useState(new Date());

console.log(startDate)
  return (
    <DatePicker
      dateFormat="yyyy/MM/dd"
      selected={startDate}
      onChange={date => setStartDate(date)}
      minDate={addDays(new Date(), 1)}       //Se establece el dia minimo a seleccionar
      
    />
  );
};

export default Calendar_client;