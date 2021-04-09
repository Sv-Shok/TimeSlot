import React, { useEffect, useState } from "react";
import "./DaysWeek.css";

const DaysWeek = ({ count }) => {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const [stateDaysWeek, setStateDaysWeek] = useState([]);

  useEffect(() => {
    const modelDaysWeek = [];
    for (let i = 0; i < count; i++) {
      modelDaysWeek.push(daysOfWeek[i]);
    }
    setStateDaysWeek(modelDaysWeek);
  }, [count]);

  return (
    <>
      <div className="boxDaysWeek">
        {stateDaysWeek.map((day) => (
          <div className="daySell" key={day}>
            {day}
          </div>
        ))}
      </div>
    </>
  );
};

DaysWeek.defaultProps = {
  count: 7,
};

export default DaysWeek;
