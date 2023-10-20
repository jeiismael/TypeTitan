import Timer from "./Timer";
import { useState } from "react";
import { useEffect } from "react";
const TypeBox = () => {
  // const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random'
  // const quoteDisplayElement = document.getElementById('quoteDisplay')
  // const quoteInputElement = document.getElementById('quoteInput')

  // quoteInputElement.addEventListener('input', () => {
  //   const arrayQuote = quoteDisplayElement.querySelectorAll('span')
  //   const arrayValue = quoteInputElement.value.split('')

  //   let correct = true
  //   arrayQuote.forEach((characterSpan, index) => {
  //     const character = arrayValue[index]
  //     if (character == null) {
  //       characterSpan.classList.remove('correct')
  //       characterSpan.classList.remove('incorrect')
  //       correct = false
  //     } else if (character === characterSpan.innerText) {
  //       characterSpan.classList.add('correct')
  //       characterSpan.classList.remove('incorrect')
  //     } else {
  //       characterSpan.classList.remove('correct')
  //       characterSpan.classList.add('incorrect')
  //       correct = false
  //     }
  //   })

  //   if (correct) renderNewQuote()
  // })

  // function getRandomQuote() {
  //     return fetch(RANDOM_QUOTE_API_URL)
  //       .then(response => response.json())
  //       .then(data => data.content)
  //   }

  //   async function renderNewQuote() {
  //     const quote = await getRandomQuote()
  //     quoteDisplayElement.innerHTML = ''
  //     quote.split('').forEach(character => {
  //       const characterSpan = document.createElement('span')
  //       characterSpan.innerText = character
  //       quoteDisplayElement.appendChild(characterSpan)
  //     })
  //     quoteInputElement.value = null
  //   }
  const RANDOM_QUOTE_API_URL = "http://api.quotable.io/random";

  const [quote, setQuote] = useState("...");
  const [inputValue, setInputValue] = useState("");
  const [inputCorrect, setInputCorrect] = useState(true);

  const getRandomQuote = async () => {
    try {
      const response = await fetch(RANDOM_QUOTE_API_URL);
      const data = await response.json();
      setQuote(data.content);
      setInputValue("");
      setInputCorrect(true);
    } catch (error) {
      console.error("Error fetching random quote:", error);
    }
  };

  const handleInputChange = (e) => {
    const typedText = e.target.value;
    setInputValue(typedText);

    const correct = quote.startsWith(typedText);
    setInputCorrect(correct);

    if (correct && typedText === quote) {
      getRandomQuote();
    }
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <>
      <div class="typebox">
        <div className="quote">
          {quote}
        </div>
        <textarea
          className={`input_area ${inputCorrect ? "correct" : "incorrect"}`}
          autoFocus
          value={inputValue}
          onChange={handleInputChange}
        ></textarea>
      </div>
    </>
  );
};

export default TypeBox;
