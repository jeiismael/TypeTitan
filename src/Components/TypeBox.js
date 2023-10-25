import React, { useState, useEffect, useRef } from "react";

const TypeBox = () => {
  const RANDOM_QUOTE_API_URL = "http://api.quotable.io/random";
  const TIMER_DURATION = 60;
  const WORDS_PER_MINUTE = 60 / TIMER_DURATION; // Words per minute (assuming 1 word per second)

  const [quote, setQuote] = useState("Press 'Start' to begin.");
  const [inputValue, setInputValue] = useState("");
  const [inputClasses, setInputClasses] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isFetchingQuote, setIsFetchingQuote] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(TIMER_DURATION);

  const inputRef = useRef(null);

  const [totalCharactersTyped, setTotalCharactersTyped] = useState(0);
  const [totalErrors, setTotalErrors] = useState(0);

  const toggleFetchingQuote = () => {
    if (isFetchingQuote) {
      setIsFetchingQuote(false);
      setInputValue("");
      setQuote("Press Start to begin.");
      setTimeRemaining(TIMER_DURATION);
      setTotalCharactersTyped(0); // Reset character count
      setTotalErrors(0); // Reset error count
    } else {
      getRandomQuote();
      setIsFetchingQuote(true);
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

    const newInputClasses = quote.split("").map((char, index) => {
      if (typedText[index] === char) {
        return "correct";
      } else if (index < typedText.length) {
        setTotalCharactersTyped((prevCount) => prevCount + 1);
        return "incorrect";
      }
      return "untyped";
    });

    setInputClasses(newInputClasses);

    const isInputCorrect = newInputClasses.every((charClass) => charClass === "correct");

    if (isInputCorrect) {
      getRandomQuote();
    } else {
      // Count errors
      setTotalErrors((prevErrors) => prevErrors + 1);
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
      setIsFetchingQuote(false);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isFetchingQuote, timeRemaining]);

  const wordsTyped = totalCharactersTyped / 5; // Assuming an average word length of 5 characters
  const wpm = (wordsTyped / TIMER_DURATION) * 60; // Words per minute

  const cpm = (totalCharactersTyped / TIMER_DURATION) * 60; // Characters per minute

  const accuracy = ((totalCharactersTyped - totalErrors) / totalCharactersTyped) * 100; // Accuracy percentage

  return (
    <>
      <div className="typebox">
        <div className="quote">
          {quote.split("").map((char, index) => (
            <span key={index} onCopy={handleCopy} className={inputClasses[index]}>
              {char}
            </span>
          ))}
        </div>
        <textarea
          ref={inputRef}
          className="input_area"
          value={inputValue}
          onChange={handleInputChange}
        ></textarea>
        <div className="timer">
          <h1>{timeRemaining}</h1>
          
          <div>CPM: {cpm.toFixed(2)}</div>
          
        </div>
        <div className="timer">
        <div>WPM: {wpm.toFixed(2)}</div>
        </div>
        <div className="timer">
        <div>Accuracy: {accuracy.toFixed(2)}%</div>
        </div>
        <button onClick={toggleFetchingQuote}>
          {isFetchingQuote ? "Reset" : "Start"}
        </button>
      </div>
    </>
  );
};

export default TypeBox;
