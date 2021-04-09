import React, { useEffect, useState } from "react";
import './CountHours.css'

const CountHours = ({ count }) => {
  const [stateCountHours, setStateCountHours] = useState([]);

  useEffect(() => {
    const modelCountHours = [];
    for (let i = 0; i < count; i++) {
      modelCountHours.push(i + 1);
    }
    setStateCountHours(modelCountHours);
  }, [count]);

  return (
    <>
      <div className="countHours">
        {stateCountHours.map((day) => (
          <div className="countHour" key={day}>
            {day}
          </div>
        ))}
      </div>
    </>
  );
};

CountHours.defaultProps = {
  count: 24,
};

export default CountHours;
