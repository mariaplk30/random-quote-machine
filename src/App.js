import React, { useState, useEffect } from 'react'
import './App.css';
import QuoteBox from './component/QuoteBox';

const dataURL = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

function App() {
    const [quoteData, setQuoteData] = useState([]);
    document.body.style.backgroundColor = "#7bdff2";
    useEffect(() => {
          fetchQuotes();
    }, []);

    const fetchQuotes = async () => {
          const response = await fetch(dataURL);
          const jsonData = await response.json();
        setQuoteData(jsonData.quotes);
    }

    return (
      <>
        <QuoteBox quotes={quoteData}/>
      </>
    );
}

export default App;
