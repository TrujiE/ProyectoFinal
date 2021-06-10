import React, { useContext } from "react";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import { Context } from "../store/appContext";

import "react-datepicker/dist/react-datepicker.css";

const Calendar_client = () => {
  const { store, actions } = useContext(Context);
  console.log(store.startDate)

  return (
    <DatePicker
      dateFormat="yyyy-MM-dd"
      selected={store.startDate}
      onChange={date => actions.setCalendar(date)}
      minDate={addDays(new Date(), 1)} //Se establece el día mínimo a seleccionar
      className="form-control"
    />
  );
};

export default Calendar_client;