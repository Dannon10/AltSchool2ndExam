import React, { useReducer } from 'react';
import {Router, Routes, Route, Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';


export default function UseReducer() {
  const initialState = {count: 0}
  const reducer = (
    state = initialState,
    action : {type:string; payload?:any}
  ) => {
    switch(action.type){
      case "increment":
        return {count: state.count + 1}
        case "decrement":
          return {count: state.count - 1}
          case "reset":
            return {count: 0}
              default: 
              return state;
    }
  }


  const [state, dispatch] = useReducer(reducer, initialState)
  const increment = () => {
    dispatch({type: "increment"})
  }

  const decrement = () =>{
    dispatch({type: "decrement"})
  }

  const reset = () => {
    dispatch({type: "reset"})
  }

  const changeCounterValue = () => {
    dispatch({type: "changeCounterValue"})
  }
        
  function Header() {
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

return (
<div className="counter-contain">
<Helmet>
        <title>useReducer counter Page</title>
        <meta name="description" content="Page to test useReducer counter" />
        <link rel="canonical"href="/UseReducer" />
      </Helmet>
  <Header />
      <div className="counter-container">
<h1 className={state.count > 0 ? "positive" : state.count < 0 ? "negative" : null}>{state.count}</h1>
      <div className="button-container">
<button className="button" onClick={increment}>+</button>
      <button className="button" onClick={decrement}>-</button>
      <button className="button" id="reset" onClick={reset}>&#9850;</button>
      </div>
<input onKeyUp={() => {

}} 
      placeholder="Enter your value here"
      className="input" 
      type="number"
      />
</div>
</div>
)
}