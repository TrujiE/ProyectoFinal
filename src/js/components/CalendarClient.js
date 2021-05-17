import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Calendar_client = () => {
  const [startDate, setStartDate] = useState(new Date());
    console.log(startDate)
  return (
    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
  );
};

export default Calendar_client;