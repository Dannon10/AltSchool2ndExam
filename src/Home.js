import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Test from "./Test";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Home Page" />
        <link rel="canonical" href="/" />
      </Helmet>
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
            <Link to="/Test">ErrorBoundary</Link>
          </li>
        </ul>
      </nav>
      <div className="main">
        <h2> Welcome</h2>
        <h4>To my Counter App!!!</h4>
      </div>
    </div>
  );
}
