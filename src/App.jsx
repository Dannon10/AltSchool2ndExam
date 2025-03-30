import React from "react";
import "./styles.css";
import UseReducer from "./UseReducer";
import Home from "./Home";
import Error404 from "./Error404";
import { Routes, Route } from "react-router-dom";
import Customhook from "./Customhook";
import Test from "./Test";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Error404" element={<Error404 />} />
      <Route path="/UseReducer" element={<UseReducer />} />
      <Route path="/Customhook" element={<Customhook />} />
      <Route path="/ErrorBoundary" element={<Test />} />
    </Routes>
  );
}
