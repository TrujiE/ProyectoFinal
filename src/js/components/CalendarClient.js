import React, { useContext } from "react";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import { Context } from "../store/appContext";
import getState from "../store/flux";

import "react-datepicker/dist/react-datepicker.css";

const Calendar_client = () => {
     const { store, actions } = useContext(Context);
     console.log(store.startDate)

  return (
    <DatePicker
      dateFormat="yyyy/MM/dd"
      selected={store.startDate}
      onChange={date => actions.setCalendar(date)}
      minDate={addDays(new Date(), 1)}       //Se establece el dia minimo a seleccionar
    />
  );
};

export default Calendar_client;