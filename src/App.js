import React  from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import LoginPage from "./Pages/Auth/LoginPage.jsx";
import SignUpPage from "./Pages/Auth/SignUpPage.jsx";
import Navbar from "./Pages/Navbar.jsx";

function App() {


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
              // <PrivateRoute>
                <HomePage />
              // </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
