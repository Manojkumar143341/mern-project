import React from "react";
import { Route, Routes } from "react-router-dom"; // React Router for routing
import Login from "./components/Login"; // Importing the Login component

const App = () => {
  return (
    <div>
      <Routes>
        {/* Route to the login page */}
        <Route path="/login" element={<Login />} />
        {/* Add other routes here as needed */}
      </Routes>
    </div>
  );
};

export default App;
