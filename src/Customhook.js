import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import {useCounter} from './useCounter';
import { Helmet } from 'react-helmet-async';


function Header(){
  return (
   <div>
      <nav className="home-links">
         <ul>
      <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/Customhook">Custom Hook</Link>
        </li>
        <li>
        <Link to="/UseReducer">UseReducer</Link>
        </li>
        <li>
        <Link to="/Error404">Error404</Link>
        </li>
        <li>
        <Link to="/ErrorBoundary">ErrorBoundary</Link>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default function Customhook() {
  const {count, increment, decrement, reset, changeCounterValue} = useCounter()

  return (
    <div className="counter-contain">
      <Header />
     
      <Helmet>
        <title>Customhook counter</title>
        <meta name="description" content="Page to test Customhook counter" />
      </Helmet>
      <link rel="canonical" href="/Customhook"></link>
     
      <div className="counter-container">
      <h1 className={count > 0 ? "positive" : count < 0 ? "negative" : null}>{count}</h1>
      <div className="button-container">
      <button className="button" onClick={increment}>+</button>
      <button className="button" onClick={decrement}>-</button>
      <button className="button" id="reset" onClick={reset}>&#9850;</button>
      </div>

      <input 
      placeholder="Enter your value here"
      className="input" 
      type="number"
      onKeyUp={(event) => {
        if(event.key === "Enter") {
          changeCounterValue(event.target.value)}
      }}/>
      </div>
      </div>
  )
}