import React, { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";

const  objectToFormData = (obj) => {
  const formData = new FormData();

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      formData.append(key, obj[key]);
    }
  }

  return formData;
}


const TypeBox = ({ username }) => {
  
  const RANDOM_QUOTE_API_URL = "http://api.quotable.io/random";
  const TIMER_DURATION = 60;
  

  const saveDataToServer = (username) => {
    const data = {
      username: username,
      cpm: cpm.toFixed(2),
      err: errorCount,
      wpm: wpm.toFixed(2),
      accuracy: accuracy.toFixed(2),
    };
     const formData = objectToFormData(data);
     fetch("http://localhost/typetitan/src/Backend/stats.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  };
  

  const [quote, setQuote] = useState("Press 'Start' to begin.");
  const [inputValue, setInputValue] = useState("");
  const [inputClasses, setInputClasses] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isFetchingQuote, setIsFetchingQuote] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(TIMER_DURATION);
  
  const [isInputDisabled, setInputDisabled] = useState(true);

  const inputRef = useRef(null); // focus sa typebox

  const [errorCount, setErrorCount] = useState(0);
  const [totalError, setTotalError] = useState(0);
  const [totalCharactersTyped, setTotalCharactersTyped] = useState(0);
  const [totalChars, setTotalChars] = useState(0)
  const [totalWordsTyped, setTotalWordsTyped] = useState(0);

  const wpm = totalWordsTyped; 
  const cpm = totalChars; 
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
      setTotalChars(0);
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


    const errorCount = typedText.split("").reduce((err, char, index) => {
      return char !== quote[index] ? err + 1 : err;
    }, 0);

    setTotalCharactersTyped(typedText.length);
    setErrorCount(errorCount);



    if (timeRemaining > 0) {
      setTotalChars((prevTotal) => prevTotal + 1);
    }

    const quoteColor = quote.split("").map((char, index) => {
      if (typedText[index] === char) {
        return "correct";
      } else if (index < typedText.length) {
        return "incorrect";
      }
      return "untyped";
    });
    setInputClasses(quoteColor);

    const isInputCorrect = quoteColor.every(
      (charClass) => charClass === "correct"
    );
    if (isInputCorrect) {
      setTotalWordsTyped((prevWords) => prevWords + 1);
      setTotalChars((prevTotal) => prevTotal + 1);
      getRandomQuote();
    } else if (typedText.length === quote.length) {
      getRandomQuote();
    }
      else if (typedText.endsWith(" ")) {
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


  useEffect(() => {
    if (timeRemaining === 0) {
      saveDataToServer(username);
    }
  }, [timeRemaining]);

  return (
    <>
      <div className="typebox">
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
          <Button
            className="restart_btn"
            variant="dark"
            onClick={toggleFetchingQuote}
          >
            {isFetchingQuote ? "Reset" : "Start"}
          </Button>
      </div>
    </div>

    
  </>
  );
};

export default TypeBox;
