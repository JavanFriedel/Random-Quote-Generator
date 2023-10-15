import './App.css';
import { useState } from 'react';
import quotesDB from './components/quotesDB';

function App() {
  let currentQuote = 0;
  const randomQuoteIndex = () => {
    let newQuoteNum = Math.floor(Math.random() * quotesDB.length);

    if (newQuoteNum == currentQuote) {
      if (newQuoteNum == quotesDB.length - 1) {
        newQuoteNum--;
      } else {
        newQuoteNum++;
      }
    }

    currentQuote = newQuoteNum;
    return newQuoteNum;
  };

  const [quote, setQuote] = useState(quotesDB[randomQuoteIndex()]);

  function handleClick() {
    setQuote(quotesDB[randomQuoteIndex()]);
  }

  return (
    <>
      <div id="outer-wrapper" className="h-screen flex flex-col justify-center">
        <div id="quote-box" className="bg-red-100 m-auto w-2/5 p-10">
          <h1 id="test" className="text-left m-2">
            "{quote.quoteText}"
          </h1>
          <h2 id="author" className="text-right m-2">
            - {quote.author}
          </h2>
          <div className="flex justify-between mt-5">
            <a
              id="tweet-quote"
              className="bg-blue-400 p-2 px-4 text-slate-200"
              href={`https://twitter.com/intent/tweet?text="${quote.quoteText}" - ${quote.author}`}
              target="_blank"
            >
              Tweet
            </a>
            <button
              id="new-quote"
              onClick={handleClick}
              className="bg-blue-400 p-2 px-4 text-slate-200"
            >
              New Quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
