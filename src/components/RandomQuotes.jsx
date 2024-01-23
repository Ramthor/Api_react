import React, { useState } from "react";
import ReplayIcon from "@mui/icons-material/Replay";

const RandomQuotes = () => {
  let quotes = [];

  async function loadeQuotes() {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
  }

  const [quote, setQuote] = useState({
    text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison",
  });
  const randome = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(select);
  };

  loadeQuotes();

  return (
    <>
      <div className="container">
        <div className="quote">{quote.text}</div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">{quote.author.split(",")[0]}</div>
          <div className="relod__btn">
            <button
              onClick={() => {
                randome();
              }}
            >
              <ReplayIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RandomQuotes;
