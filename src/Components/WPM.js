import React, { useState, useEffect } from "react";

const WPMCalculator = () => {
  const [inputValue, setInputValue] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [wpm, setWPM] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [timerID, setTimerID] = useState(null);

  const handleInputChange = (e) => {
    const typedText = e.target.value;
    setInputValue(typedText);

    if (typedText) {
      if (!startTime) {
        setStartTime(new Date());
        const timer = setInterval(updateElapsedTime, 1000);
        setTimerID(timer);
      }

      const words = typedText.trim().split(/\s+/).filter((word) => word !== "");
      setWordCount(words.length);
    } else {
      if (timerID) {
        clearInterval(timerID);
        setTimerID(null);
      }
      setStartTime(null);
      setWordCount(0);
      setElapsedTime(0);
    }
  };

  const updateElapsedTime = () => {
    const now = new Date();
    const timeDiff = (now - startTime) / 1000; // in seconds
    setElapsedTime(timeDiff);

    if (timeDiff > 0) {
      const wpmValue = (wordCount / timeDiff) * 60;
      setWPM(wpmValue);
    }
  };

  useEffect(() => {
    if (inputValue === "") {
      setWPM(0);
    }
  }, [inputValue]);

  return (
    <div className="wpm-calculator">
      <textarea
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Start typing here..."
      ></textarea>
      <div className="stats">
        <div>
          <strong>Word Count:</strong> {wordCount}
        </div>
        <div>
          <strong>Elapsed Time (s):</strong> {elapsedTime.toFixed(2)}
        </div>
        <div>
          <strong>WPM:</strong> {wpm.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default WPMCalculator;
