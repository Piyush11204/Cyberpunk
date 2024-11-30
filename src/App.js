import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import LoginPage from "./Pages/Auth/LoginPage.jsx";
import SignUpPage from "./Pages/Auth/SignUpPage.jsx";
import Navbar from "./Pages/Navbar.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Mock authentication status (Replace this with real auth logic)
  useEffect(() => {
    const user = localStorage.getItem("user"); // Simulating user auth
    setIsLoggedIn(!!user);
  }, []);

  const PrivateRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" replace />;
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />

          {/* Protected Route */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
