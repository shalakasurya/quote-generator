import React, {useState,useEffect} from 'react';
import './App.css';


function App() {
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();

  useEffect(() => {
    GetNewQuote();
  }, []);

  const GetNewQuote = () => {
    fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      })
  }
  return (
    <div className="App">
      <div className='quote'>
        <h2>{quote}</h2>
        <small>- {author} -</small>
      </div>
      <br />
      <button className='btn_new_quote' onClick={GetNewQuote}>Generate New Quote</button>
    </div>
  );
}

export default App;
