import React, { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";

const TypeBox = () => {
  const RANDOM_QUOTE_API_URL = "http://api.quotable.io/random";
  const TIMER_DURATION = 5;
  

  const [quote, setQuote] = useState("Press 'Start' to begin.");
  const [inputValue, setInputValue] = useState("");
  const [inputClasses, setInputClasses] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isFetchingQuote, setIsFetchingQuote] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(TIMER_DURATION);
  const [errorCount, setErrorCount] = useState(0);
  const [isInputDisabled, setInputDisabled] = useState(true);

  const inputRef = useRef(null);

  const [totalCharactersTyped, setTotalCharactersTyped] = useState(0);
  const [totalWordsTyped, setTotalWordsTyped] = useState(0);

  const wpm = totalWordsTyped; 
  const cpm = totalCharactersTyped; 
  const accuracy =
    ((totalCharactersTyped - errorCount) / totalCharactersTyped) * 100;

  const resetTimer = () => {
    setTimeRemaining(TIMER_DURATION);
    setIsFetchingQuote(false);
    setQuote("Press 'Start' to begin.");
  };

  const toggleFetchingQuote = () => {
    if (isFetchingQuote) {
      setIsFetchingQuote(false);
      setInputValue("");
      setQuote("Press Start to begin.");
      setTimeRemaining(TIMER_DURATION);
      setInputDisabled(true);
      setErrorCount(0);  
      setTotalCharactersTyped(0);
      setTotalWordsTyped(0);
      resetTimer();
    } else {
      getRandomQuote();
      setIsFetchingQuote(true);
      setInputDisabled(false);
      setIsTyping(true);
      inputRef.current.focus();
    }
  };

  const getRandomQuote = async () => {
    try {
      const response = await fetch(RANDOM_QUOTE_API_URL);
      const data = await response.json();
      setQuote(data.content);
      setInputValue("");
      setInputClasses(Array(data.content.length).fill("untyped"));
      setIsTyping(true);
    } catch (error) {
      console.error("Error fetching random quote:", error);
    }
  };

  const handleInputChange = (e) => {
    const typedText = e.target.value;
    setInputValue(typedText);

    const errorCount = typedText.split("").reduce((acc, char, index) => {
      return char !== quote[index] ? acc + 1 : acc;
    }, 0);

    setTotalCharactersTyped(typedText.length);
    setErrorCount(errorCount);

    const newInputClasses = quote.split("").map((char, index) => {
      if (typedText[index] === char) {
        return "correct";
      } else if (index < typedText.length) {
        return "incorrect";
      }
      return "untyped";
    });
    setInputClasses(newInputClasses);

    const isInputCorrect = newInputClasses.every(
      (charClass) => charClass === "correct"
    );
    if (isInputCorrect) {
      setTotalWordsTyped((prevWords) => prevWords + 1);
      getRandomQuote();
    } else if (typedText.endsWith(" ")) {
      setTotalWordsTyped((prevWords) => prevWords + 1);
    }
  };

  const handleCopy = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    let timer;
    if (isFetchingQuote && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (timeRemaining === 0) {
      clearInterval(timer);
      setQuote("Time's up!");
      setInputDisabled(true);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isFetchingQuote, timeRemaining]);

  useEffect(() => {
    if (!isInputDisabled) {
      inputRef.current.focus();
    }
  }, [isInputDisabled]);

  return (
    <>
      <div className="boxes">
        <div className="cpm">
          <div>CPM: {cpm.toFixed(2)}</div>
        </div>
        <div className="wpm">
          <div>WPM: {wpm.toFixed(2)}</div>
        </div>
        <div className="accuracy">
          <div>Accuracy: {accuracy.toFixed(2)}%</div>
        </div>
        <div className="errors">
          Errors: <h4>{errorCount}</h4>
        </div>
        <div className="timer">
          <h1>{timeRemaining}</h1>
        </div>
      </div>
      <div className="typebox">
        <div className="quote">
          {quote.split("").map((char, index) => (
            <span
              key={index}
              onCopy={handleCopy}
              className={inputClasses[index]}
            >
              {char}
            </span>
          ))}
        </div>
        <div className="input-container">
        <div className="input-area">
          <textarea
            ref={inputRef}
            className="input_area"
            disabled={isInputDisabled}
            value={inputValue}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="button-area">
          <Button
            className="restart_btn"
            variant="dark"
            onClick={toggleFetchingQuote}
          >
            {isFetchingQuote ? "Reset" : "Start"}
          </Button>
        </div>
      </div>
    </div>
  </>
  );
};

export default TypeBox;