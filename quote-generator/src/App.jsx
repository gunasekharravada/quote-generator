import "./App.css";
import { useState } from "react";

function App() {

  const quotes = [
    "Success starts with consistency.",
    "Small progress is still progress.",
    "Dream big. Start small.",
    "Discipline beats motivation.",
    "Keep learning every day.",
    "Believe in yourself and all that you are.",
    "Your only limit is your mind.",
    "Don't wait for opportunity. Create it.",
    "Success is a journey, not a destination.",
    "The harder you work, the luckier you get."

  ];

  const [quote, setQuote] = useState(quotes[0]);

  const generateQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Quote Generator</h1>

        <p>{quote}</p>

        <button onClick={generateQuote}>
          Generate Quote
        </button>
      </div>
    </div>
  );
}

export default App;