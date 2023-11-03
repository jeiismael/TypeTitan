import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (seconds > 0) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [seconds]);

  return (
    <>
    
    <div className="timer">
    <div className="header_text">Time</div>
      <h1>
      {seconds > 0 ? (
        <div>
        {seconds}
        </div>
      ) : (
        0
      )}
      </h1>
    </div>
    
    </>
  );
};

export default Timer;
