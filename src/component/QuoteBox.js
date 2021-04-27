import React, { useState } from 'react'
import '../App.css'


const colors = ['#49b6ff', '#f3c4fb', '#ecbcfd', '#e5b3fe', '#deaaff', '#d8bbff', '#d0d1ff', '#9163cb', '#b185db'];

const QuoteBox = ({quotes}) => {
    const [index, setIndex] = useState(Math.floor(Math.random() * 102));

    
    const randomNum = () => {
        let randomQuoteNum =  Math.floor(Math.random() * 102);
        let randomColorNum =  Math.floor(Math.random() * colors.length);
        
        setIndex(randomQuoteNum);
        document.body.style.backgroundColor = colors[randomColorNum];

    }

    return (
        <div>
        <div className="wrapper">
            <div id="quote-box">
                <div className="card-body">
                    <h5 className="card-title" id="text">
                        {quotes[index] && quotes[index].quote}
                        <p className="card-text" id="author">{quotes[index] && quotes[index].author}</p>
                    </h5>

                </div>
            </div>
        </div>

        <button onClick={randomNum} id="new-quote" >New Quote</button>
        <a target="_blank" id="tweet-quote" title="Tweet this quote!" href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${quotes[index] && quotes[index].quote}" %0D%0A- ${quotes[index] && quotes[index].author}%0D%0A`}>
            <i class="fa fa-twitter"></i>
        </a>

        </div>
                    
    );


}

export default QuoteBox