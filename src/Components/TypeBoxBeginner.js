import React, { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import jsonData from "./../assets/beginner.json";

const TypeBox = () => {
  const TIMER_DURATION = 60;
  

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

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * jsonData.length);
    const randomEntry = jsonData[randomIndex];
    setQuote(randomEntry.content);
    setInputValue("");
    setInputClasses(Array(randomEntry.content.length).fill("untyped"));
    setIsTyping(true);
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
    } else if (isInputCorrect) {
      setTotalCharactersTyped((prevChar) => prevChar);
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
