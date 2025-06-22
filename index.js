import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Import your CSS styles here
import App from "./App"; // Main App component
import { BrowserRouter as Router } from "react-router-dom"; // React Router for routing

// Rendering the app with routing
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
