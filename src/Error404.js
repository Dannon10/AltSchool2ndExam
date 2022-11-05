import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';



export default function Error404() {
  return (
    <Routes>
    <>
    
<Route
        path="*"
        element={
          <>
            <div className="error-404">
              <h1>&#10060; &#128721;</h1>
              <h1>Error 404 </h1>
              <h2>Page Not Found!</h2>
              <Link className="use" to="/">
          Go back Home
        </Link>
            </div>
          </>
        }
      ></Route>
      </>
      </Routes>
  )
}