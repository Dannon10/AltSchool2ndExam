import React, { useState } from "react";
// import {Routes, Route, Link} from 'react-router-dom';

export default function Test() {
  const [error, setError] = useState(false);
  if (error) {
    throw Error("Something went wrong");
  }

  return (
    <div>
      <button
        className="button"
        onClick={() => {
          setError(true);
        }}
      >
        Click Me!
      </button>
    </div>
  );
}
