import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const difference = new Date(targetDate) - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-between items-end w-2/5 mx-7">
      <div>
        <h1 className="text-4xl font-bold">Flash Sales</h1>
      </div>
      <div className="flex items-center space-x-4 text-center">
        {Object.entries(timeLeft).map(([unit, value], index, arr) => (
          <React.Fragment key={unit}>
            <div className="flex flex-col items-center">
              <span className="text-sm uppercase mb-1">{unit}</span>
              <span className="text-4xl font-bold ">
                {value?.toString().padStart(2, "0") || "00"}
              </span>
            </div>
            {index < arr.length - 1 && (
              <span className="text-4xl font-bold relative top-2">:</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
