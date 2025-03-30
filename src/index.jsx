import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter as Router} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import ErrorBoundary from './ErrorBoundary';

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ErrorBoundary>
    <Router>
      <HelmetProvider>
    <App />
    </HelmetProvider>
    </Router>
    </ErrorBoundary>
  </StrictMode>
);





