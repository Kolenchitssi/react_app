import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const DateForm = ({ name = "date", id = "" }) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      id={id}
      selected={startDate}
      onChange={(date: Date) => setStartDate(date)}
      name={name}
    />
  );
};
